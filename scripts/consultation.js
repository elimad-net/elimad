/**
 * KOEIA 회원가입, 1:1 상담 예약, 무역 서식 다운로드 및 소식 관리 모듈
 */

function initConsultationAndForms() {
  // Render News
  renderNewsSection();

  // Render Trade Forms
  renderTradeFormsSection();

  // Handle Membership Form
  setupMembershipForm();

  // Handle 1:1 Consulting Form
  setupConsultingForm();
}

// 1. News Rendering
function renderNewsSection() {
  const newsContainer = document.getElementById("news-list-container");
  if (!newsContainer || !window.KOEIA_DATA) return;

  const news = window.KOEIA_DATA.news;
  newsContainer.innerHTML = news
    .map(
      (n) => `
    <div class="news-card-item" onclick="openNewsModal('${n.id}')">
      <div class="news-meta-top">
        <span class="news-cat-tag">${n.category}</span>
        <span class="news-date">${n.date}</span>
        <span style="font-size: 0.78rem; color: var(--text-muted); margin-left: auto;">조회수 ${n.views}</span>
      </div>
      <h4 class="news-title">${n.title}</h4>
      <p class="news-summary">${n.summary}</p>
    </div>
  `
    )
    .join("");
}

// Open News Detail Modal
window.openNewsModal = function (id) {
  const item = window.KOEIA_DATA.news.find((n) => n.id === id);
  if (!item) return;

  const modalBody = document.getElementById("generic-modal-body");
  const modalTitle = document.getElementById("generic-modal-title");
  const modal = document.getElementById("generic-modal");

  modalTitle.textContent = item.title;
  modalBody.innerHTML = `
    <div>
      <div style="display: flex; gap: 12px; margin-bottom: 16px; font-size: 0.85rem; color: var(--text-muted); border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
        <span class="news-cat-tag">${item.category}</span>
        <span>등록일: ${item.date}</span>
        <span>작성자: ${item.author}</span>
        <span>조회수: ${item.views}</span>
      </div>
      <div style="font-size: 0.98rem; line-height: 1.85; color: var(--text-primary); white-space: pre-line; margin-bottom: 24px;">
        ${item.content || item.summary}
      </div>
      <div style="display: flex; justify-content: flex-end;">
        <button class="btn btn-secondary" onclick="closeGenericModal()">목록으로 닫기</button>
      </div>
    </div>
  `;

  modal.style.display = "flex";
};

// 2. Trade Forms Rendering & Simulated Download
function renderTradeFormsSection() {
  const formsContainer = document.getElementById("trade-forms-container");
  if (!formsContainer || !window.KOEIA_DATA) return;

  const forms = window.KOEIA_DATA.tradeForms;
  formsContainer.innerHTML = forms
    .map(
      (f) => `
    <div class="form-download-item">
      <div class="doc-info">
        <div class="doc-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <div class="doc-text">
          <h4>${f.name}</h4>
          <p>${f.desc} (${f.type} · ${f.size})</p>
        </div>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="downloadTradeDoc('${f.filename}', '${f.name}')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        다운로드
      </button>
    </div>
  `
    )
    .join("");
}

// Download Trade Document Generator (creates real readable text/csv/mock file blob)
window.downloadTradeDoc = function (filename, docName) {
  const content = `===============================================================
한국온라인수출입연합회 (KOEIA) 공식 무역 표준 서식
문서명: ${docName}
발행기관: Korea Online Export & Import Association (www.koeia.co.kr)
문의처: 02-6959-1140 / prayer111@hanmail.net
===============================================================

[기본 정보]
1. 수출자(Exporter): 한국온라인수출입연합회 회원사
2. 수입자(Consignee / Buyer): Global Buyer Partner
3. 선적항(Port of Loading): Busan / Incheon, Korea
4. 도착항(Port of Discharge): Destination Port
5. 결제조건(Terms of Payment): T/T, L/C, CAD (Incoterms 2020)

[품목 명세 - SAMPLE]
No | Item Description | H.S. Code | Qty | Unit Price (USD) | Total Amount
1  | Premium K-Food/Beauty Line | 2106.90 | 1,000 EA | $ 25.00 | $ 25,000.00
2  | High-Tech Smart Components | 8542.31 | 500 EA   | $ 50.00 | $ 25,000.00
---------------------------------------------------------------
TOTAL: $ 50,000.00 (FOB BUSAN)

※ 본 양식은 한국온라인수출입연합회 공인 무역 실무 표준 템플릿입니다.
`;

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  if (window.showToast) {
    window.showToast(`[${docName}] 서식이 다운로드되었습니다.`, "success");
  }
};

// 3. Membership Form Logic
function setupMembershipForm() {
  const form = document.getElementById("membership-signup-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const plan = document.querySelector("input[name='membership_plan']:checked")?.value || "정회원사";
    const company = document.getElementById("join-company").value.trim();
    const ceo = document.getElementById("join-ceo").value.trim();
    const tel = document.getElementById("join-tel").value.trim();
    const email = document.getElementById("join-email").value.trim();
    const interest = Array.from(document.querySelectorAll("input[name='join_interest']:checked")).map((i) => i.value);

    if (!company || !ceo || !tel || !email) {
      if (window.showToast) window.showToast("필수 항목을 모두 입력해주세요.", "warning");
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.innerHTML = "신청 접수 중...";

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "회원가입 신청 완료";

      // Show confirmation dialog
      const modalBody = document.getElementById("generic-modal-body");
      const modalTitle = document.getElementById("generic-modal-title");
      const modal = document.getElementById("generic-modal");

      modalTitle.textContent = "🎉 회원가입 신청이 정상 접수되었습니다!";
      modalBody.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(16, 185, 129, 0.2); color: var(--accent-emerald); display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 16px;">
            ✓
          </div>
          <h4 style="font-size: 1.25rem; margin-bottom: 10px; color: var(--text-primary);">${company} (${ceo} 대표님)</h4>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">
            선택 등급: <strong style="color: var(--accent-cyan);">${plan}</strong><br/>
            연합회 담당 간사가 <strong>${email}</strong> 및 <strong>${tel}</strong>로 1영업일 이내에 연락드려 공식 입회 절차 및 웹 아카이브 지원 등록을 도와드리겠습니다.
          </p>
          <div style="background: rgba(255,255,255,0.05); border-radius: var(--radius-md); padding: 14px; text-align: left; font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 24px;">
            <strong>선택 관심 지원 분야:</strong> ${interest.join(", ") || "전체 수출 지원"}
          </div>
          <button class="btn btn-primary" onclick="closeGenericModal(); form.reset();">확인</button>
        </div>
      `;

      modal.style.display = "flex";
      if (window.showToast) window.showToast("회원가입 신청서가 성공적으로 전송되었습니다.", "success");
    }, 1000);
  });
}

// 4. Consulting Modal & Form
window.openConsultModal = function (defaultSubject = "") {
  const modal = document.getElementById("consult-modal");
  const subjectInput = document.getElementById("consult-subject");
  if (subjectInput && defaultSubject) {
    subjectInput.value = defaultSubject;
  }
  if (modal) modal.style.display = "flex";
};

window.closeConsultModal = function () {
  const modal = document.getElementById("consult-modal");
  if (modal) modal.style.display = "none";
};

function setupConsultingForm() {
  const form = document.getElementById("consulting-booking-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("consult-name").value.trim();
    const tel = document.getElementById("consult-tel").value.trim();
    const subject = document.getElementById("consult-subject").value.trim();
    const message = document.getElementById("consult-message").value.trim();

    if (!name || !tel) {
      if (window.showToast) window.showToast("성함과 연락처를 입력해주세요.", "warning");
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.innerHTML = "예약 접수 중...";

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "1:1 상담 예약 완료";
      closeConsultModal();

      if (window.showToast) {
        window.showToast(`[${name}님] 1:1 수출입 상담 예약이 접수되었습니다.`, "success");
      }
      form.reset();
    }, 800);
  });
}

// 5. eBook Download Promo Modal
window.openEbookModal = function () {
  const modalBody = document.getElementById("generic-modal-body");
  const modalTitle = document.getElementById("generic-modal-title");
  const modal = document.getElementById("generic-modal");

  modalTitle.textContent = "📖 전자책 《AI 시대, 검색에 남는 기업은 무엇이 다른가》 무료 신청";
  modalBody.innerHTML = `
    <div>
      <div style="display: flex; gap: 16px; margin-bottom: 20px; align-items: center;">
        <div style="width: 80px; height: 110px; background: var(--primary-gradient); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem; text-align: center; padding: 6px;">
          KOEIA<br/>eBook<br/>2026
        </div>
        <div>
          <h4 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 4px;">한국온라인수출입연합회 특별 발간</h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary);">
            생성형 AI 검색(ChatGPT, Perplexity)에서 글로벌 바이어의 선택을 받는 CCO 최적화 전략 리포트
          </p>
        </div>
      </div>

      <form id="ebook-form" onsubmit="handleEbookSubmit(event)">
        <div class="form-group">
          <label class="form-label">회사명</label>
          <input type="text" class="form-input" id="ebook-company" placeholder="예: (주)한국무역" required />
        </div>
        <div class="form-group">
          <label class="form-label">이메일 주소 (e-Book 수신용)</label>
          <input type="email" class="form-input" id="ebook-email" placeholder="example@company.com" required />
        </div>
        <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
          <button type="button" class="btn btn-secondary" onclick="closeGenericModal()">취소</button>
          <button type="submit" class="btn btn-gold">PDF 전자책 즉시 다운로드 & 발송</button>
        </div>
      </form>
    </div>
  `;

  modal.style.display = "flex";
};

window.handleEbookSubmit = function (e) {
  e.preventDefault();
  const company = document.getElementById("ebook-company").value.trim();
  const email = document.getElementById("ebook-email").value.trim();

  // Instant PDF/Text download
  downloadTradeDoc("KOEIA_AI_Search_Era_Business_Strategy_Ebook.pdf", "《AI 시대, 검색에 남는 기업은 무엇이 다른가》");

  closeGenericModal();
  if (window.showToast) {
    window.showToast(`[${company}] ${email}로 전자책 발송 및 다운로드가 완료되었습니다.`, "success");
  }
};

document.addEventListener("DOMContentLoaded", initConsultationAndForms);
