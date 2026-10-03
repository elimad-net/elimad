/**
 * KOEIA 회원사 비즈니스 쇼케이스 모듈
 */

function initMemberShowcase() {
  const container = document.getElementById("members-grid-container");
  const filterChips = document.querySelectorAll("[data-member-filter]");
  const searchInput = document.getElementById("member-search-input");

  if (!container || !window.KOEIA_DATA) return;

  const members = window.KOEIA_DATA.members;
  let activeFilter = "all";
  let searchKeyword = "";

  function renderMembers() {
    let filtered = members.filter((m) => {
      const matchFilter = activeFilter === "all" || m.category === activeFilter;
      const matchSearch =
        !searchKeyword ||
        m.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        m.summary.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        m.categoryName.toLowerCase().includes(searchKeyword.toLowerCase());
      return matchFilter && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <p style="font-size: 1.1rem; margin-bottom: 8px;">🔍 검색 조건에 일치하는 회원사가 없습니다.</p>
          <p style="font-size: 0.9rem;">다른 카테고리를 선택하거나 검색어를 변경해보세요.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered
      .map(
        (m) => `
      <div class="member-card" data-id="${m.id}">
        <div class="member-thumb">
          <img src="${m.image}" alt="${m.name}" loading="lazy" />
          <span class="member-badge-float">${m.badge}</span>
        </div>
        <div class="member-body">
          <span class="member-category">${m.categoryName}</span>
          <h4 class="member-name">${m.name}</h4>
          <p class="member-summary">${m.summary}</p>
          
          <div class="member-meta-row">
            <span>수출 대상: <strong>${m.exportTarget.split(",")[0]} 외</strong></span>
            <span class="archive-pill">AI 아카이브 ${m.archiveCount}</span>
          </div>

          <div style="margin-top: 18px; display: flex; gap: 8px;">
            <button class="btn btn-secondary btn-sm" style="flex-grow: 1;" onclick="openMemberModal('${m.id}')">
              상세 소개
            </button>
            <button class="btn btn-primary btn-sm" onclick="requestMemberContact('${m.name}')">
              바이어 매칭
            </button>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  renderMembers();

  // Category Filter
  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeFilter = chip.getAttribute("data-member-filter");
      renderMembers();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value.trim();
      renderMembers();
    });
  }
}

// Open Member Detail Modal
window.openMemberModal = function (id) {
  const member = window.KOEIA_DATA.members.find((m) => m.id === id);
  if (!member) return;

  const modalBody = document.getElementById("generic-modal-body");
  const modalTitle = document.getElementById("generic-modal-title");
  const modal = document.getElementById("generic-modal");

  modalTitle.textContent = `${member.name} (${member.categoryName})`;
  modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
        <img src="${member.image}" alt="${member.name}" style="border-radius: var(--radius-md); width: 100%; height: 200px; object-fit: cover;" />
        <div style="display: flex; flex-direction: column; justify-content: space-around;">
          <div>
            <span class="section-badge" style="margin-bottom: 6px;">${member.grade} · ${member.badge}</span>
            <h4 style="font-size: 1.3rem; margin-bottom: 6px; color: var(--text-primary);">${member.name}</h4>
            <p style="font-size: 0.9rem; color: var(--accent-cyan);">AI 웹 아카이브 누적: ${member.archiveCount}</p>
          </div>
          <div style="font-size: 0.88rem; color: var(--text-secondary);">
            <strong>주요 타깃 시장:</strong> ${member.exportTarget}
          </div>
        </div>
      </div>

      <h5 style="color: var(--text-primary); font-size: 1rem; margin-bottom: 8px;">기업 및 제품 소개</h5>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 20px;">
        ${member.description}
      </p>

      <h5 style="color: var(--text-primary); font-size: 1rem; margin-bottom: 8px;">대표 수출 라인업</h5>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
        ${member.products.map((p) => `<span class="alliance-tag" style="padding: 6px 12px; font-size: 0.85rem;">📦 ${p}</span>`).join("")}
      </div>

      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <button class="btn btn-secondary" onclick="closeGenericModal()">닫기</button>
        <button class="btn btn-primary" onclick="requestMemberContact('${member.name}')">해당 기업과 비즈니스 상담</button>
      </div>
    </div>
  `;

  modal.style.display = "flex";
};

window.requestMemberContact = function (memberName) {
  closeGenericModal();
  if (window.openConsultModal) {
    window.openConsultModal(`[회원사 비즈니스 연계] ${memberName} 상담 신청`);
  }
};

document.addEventListener("DOMContentLoaded", initMemberShowcase);
