/**
 * KOEIA 글로벌 얼라이언스 & 해외 지부 네트워크 모듈
 */

function initGlobalAlliance() {
  const container = document.getElementById("alliance-cards-container");
  const filterBtns = document.querySelectorAll("[data-alliance-filter]");

  if (!container || !window.KOEIA_DATA) return;

  const data = window.KOEIA_DATA.globalAlliance;
  const directoryData = window.KOEIA_DATA.network40Countries;

  function renderAlliance(items) {
    container.innerHTML = items
      .map(
        (item) => `
      <div class="alliance-card" data-id="${item.id}">
        <div>
          <div class="alliance-top">
            <span class="country-flag-tag">
              <span class="live-dot"></span>
              ${item.country} (${item.countryEn})
            </span>
            <span class="alliance-date">${item.date}</span>
          </div>
          <h4 class="alliance-partner">${item.partner}</h4>
          <p class="alliance-details">${item.details}</p>
        </div>
        <div>
          <div class="alliance-tags" style="margin-bottom: 16px;">
            ${item.tags.map((t) => `<span class="alliance-tag">#${t}</span>`).join("")}
          </div>
          <button class="btn btn-secondary btn-sm" style="width: 100%;" onclick="openAllianceModal('${item.id}')">
            협력 상세 & 바이어 연계 보기
          </button>
        </div>
      </div>
    `
      )
      .join("");
  }

  // Render 40 Countries Matrix Directory
  function render40CountriesDirectory() {
    const dirContainer = document.getElementById("global-40countries-directory");
    if (!dirContainer || !directoryData) return;

    dirContainer.innerHTML = directoryData
      .map(
        (group) => `
      <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--surface-glass-border); border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column;">
        <div style="font-weight: 700; color: var(--accent-cyan); font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
          <span>🌐 ${group.continent}</span>
          <span style="font-size: 0.78rem; background: rgba(59,130,246,0.2); padding: 2px 8px; border-radius: 4px; color: #fff;">${group.countries.length}개국</span>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${group.countries
            .map(
              (c) => `
            <span style="background: rgba(255,255,255,0.08); padding: 5px 10px; border-radius: 6px; font-size: 0.85rem; color: var(--text-primary); border: 1px solid rgba(255,255,255,0.08);">
              ${c}
            </span>
          `
            )
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  renderAlliance(data);
  render40CountriesDirectory();

  // Filter Buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-alliance-filter");
      if (filter === "all") {
        renderAlliance(data);
      } else {
        const filtered = data.filter((item) => {
          if (filter === "central-asia") return item.country.includes("우즈베키스탄") || item.country.includes("카자흐스탄");
          if (filter === "china") return item.country.includes("중국");
          if (filter === "asia") return item.country.includes("필리핀") || item.country.includes("베트남") || item.country.includes("대한민국");
          if (filter === "west") return item.country.includes("미국") || item.country.includes("독일") || item.country.includes("UAE");
          return true;
        });
        renderAlliance(filtered);
      }
    });
  });
}

// Global Modal Opener
window.openAllianceModal = function (id) {
  const data = window.KOEIA_DATA.globalAlliance.find((item) => item.id === id);
  if (!data) return;

  const modalBody = document.getElementById("generic-modal-body");
  const modalTitle = document.getElementById("generic-modal-title");
  const modal = document.getElementById("generic-modal");

  modalTitle.textContent = `${data.country} | ${data.partner}`;
  modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <div style="display: flex; gap: 10px; margin-bottom: 14px; flex-wrap: wrap;">
        <span class="section-badge" style="margin: 0;">${data.type}</span>
        <span class="country-flag-tag">체결일: ${data.date}</span>
        <span class="country-flag-tag">거점: ${data.location}</span>
      </div>
      <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-primary); margin-bottom: 20px;">
        ${data.details}
      </p>
      
      <div style="background: rgba(255,255,255,0.05); padding: 18px; border-radius: var(--radius-md); margin-bottom: 24px; border-left: 4px solid var(--accent-cyan);">
        <h5 style="color: var(--accent-cyan); margin-bottom: 8px;">👑 KOEIA 회원사 제공 혜택</h5>
        <ul style="display: flex; flex-direction: column; gap: 6px; font-size: 0.9rem; color: var(--text-secondary);">
          <li>• 현지 정부 및 상공회의소 공인 수입 바이어 1:1 매칭 지원</li>
          <li>• 현지 경제특구 입주 시 법인세/관세 감면 및 물류 창고 우선 배정</li>
          <li>• 현지 온·오프라인 상설 전시관 입점 및 통관 프로세스 전담 지원</li>
        </ul>
      </div>

      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <button class="btn btn-secondary" onclick="closeGenericModal()">닫기</button>
        <button class="btn btn-primary" onclick="requestBuyerMeeting('${data.partner}')">해당 거점 바이어 미팅 신청</button>
      </div>
    </div>
  `;

  modal.style.display = "flex";
};

window.requestBuyerMeeting = function (partnerName) {
  closeGenericModal();
  if (window.openConsultModal) {
    window.openConsultModal(`[글로벌 거점 연계] ${partnerName} 바이어 상담 신청`);
  }
};

document.addEventListener("DOMContentLoaded", initGlobalAlliance);
