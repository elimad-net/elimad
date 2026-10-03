/**
 * ELIM AD (엘림) - High-End AI Archive Marketing Platform
 * Core Interactive Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initHeaderScroll();
  initSmoothScroll();
  initInfographicTabs();
  initModalLightbox();
  initDiagnosticTool();
  initPortfolioFilter();
  initConsultationForm();
  initAIChatbot();
});

/* --------------------------------------------------------------------------
   1. Theme Toggle (Dark / Light)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('elim_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('elim_theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === 'dark' 
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
}

/* --------------------------------------------------------------------------
   2. Mobile Menu Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburgerBtn');
  const overlay = document.getElementById('mobileMenuOverlay');
  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', () => {
    overlay.classList.toggle('active');
    document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
  });

  const links = overlay.querySelectorAll('.mobile-menu-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* --------------------------------------------------------------------------
   3. Header Sticky & Active Navigation
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Infographic 만화 Tabs
   -------------------------------------------------------------------------- */
function initInfographicTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const activeContent = document.getElementById(targetTab);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Modal Lightbox (Infographic Zoom & View)
   -------------------------------------------------------------------------- */
function initModalLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalCloseBtn');
  const zoomTriggers = document.querySelectorAll('[data-zoom-img]');

  if (!modal || !modalImg) return;

  zoomTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const imgSrc = trigger.getAttribute('data-zoom-img') || trigger.src;
      modalImg.src = imgSrc;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* --------------------------------------------------------------------------
   6. AI Readiness Diagnostic Simulator (실시간 AI 검색 준비도 진단기)
   -------------------------------------------------------------------------- */
function initDiagnosticTool() {
  const diagForm = document.getElementById('diagnosticForm');
  const resultPanel = document.getElementById('diagnosticResult');
  if (!diagForm || !resultPanel) return;

  diagForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const companyName = document.getElementById('diagCompany').value || '귀사';
    const industry = document.getElementById('diagIndustry').value;
    const currentMarketing = document.getElementById('diagCurrent').value;
    const monthlyBudget = document.getElementById('diagBudget').value;

    const analyzeBtn = diagForm.querySelector('button[type="submit"]');
    const originalBtnText = analyzeBtn.innerHTML;
    analyzeBtn.disabled = true;
    analyzeBtn.innerHTML = `
      <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-linecap="round"></circle></svg>
      AI 검색 준비도 모의 분석 중...
    `;

    setTimeout(() => {
      analyzeBtn.disabled = false;
      analyzeBtn.innerHTML = originalBtnText;

      // Calculate illustrative simulation scores; this is not a live AI/search measurement.
      let baseScore = 28;
      if (currentMarketing === 'sns') baseScore = 42;
      if (currentMarketing === 'search_ads') baseScore = 38;
      if (currentMarketing === 'blog') baseScore = 48;
      if (currentMarketing === 'none') baseScore = 18;

      const finalScore = Math.min(100, baseScore + (industry ? 3 : 0) + (monthlyBudget === 'high' ? 4 : 0));

      document.getElementById('resCompanyName').innerText = companyName;
      document.getElementById('resScoreNum').innerText = `${finalScore}점 / 100점`;
      document.getElementById('resIndustryText').innerText = industry;
      
      const citationRate = Math.min(80, Math.floor(finalScore * 0.45) + 12);
      document.getElementById('resCitationRate').innerText = `${citationRate}% (모의 참고값)`;
      document.getElementById('resArchiveNeed').innerText = finalScore < 50 ? '월 60건 집중형 아카이빙 권장' : '월 30건 유지·확장형 아카이빙 권장';
      
      resultPanel.style.display = 'block';
      resultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1200);
  });
}

/* --------------------------------------------------------------------------
   7. Portfolio / Works Filtering
   -------------------------------------------------------------------------- */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      workCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   8. Consultation / Quote Form
   -------------------------------------------------------------------------- */
function initConsultationForm() {
  const form = document.getElementById('consultationForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const emailEl = document.getElementById('contactEmail');
    const email = emailEl ? emailEl.value.trim() : '';
    const company = document.getElementById('contactCompany').value.trim();
    const service = document.getElementById('contactService').value;
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !phone) {
      alert('성함과 연락처를 정확히 입력해주세요.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const origBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '접수 처리 중...';

    // Google Forms 연동: 응답 스프레드시트로 실제 전송 (키 불필요, no-cors)
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfpF_H1d_nSjZKSj6Q2D2G6QtTMoXFDv-rFYEG86kW8OUtSBg/formResponse';
    const fd = new FormData();
    fd.append('entry.1932035991', name);
    fd.append('entry.2047112432', phone);
    fd.append('entry.337534646', email);
    fd.append('entry.337006577', company);
    fd.append('entry.148703750', service);
    fd.append('entry.1251241703', message);
    const post = fetch(GOOGLE_FORM_URL, { method: 'POST', mode: 'no-cors', body: fd }).catch(() => {});
    const timeout = new Promise((res) => setTimeout(res, 8000));
    Promise.race([post, timeout]).finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '상담 신청 완료';
      
      const successModal = document.createElement('div');
      successModal.className = 'modal-overlay active';
      successModal.innerHTML = `
        <div class="modal-content" style="max-width: 480px; padding: 2.5rem; text-align: center;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(0, 242, 254, 0.15); border: 2px solid var(--accent-cyan); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1.5rem auto;">✓</div>
          <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.75rem; color: var(--text-primary);">상담 신청이 접수되었습니다!</h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.75rem;">
            <strong>${company ? company + ' ' : ''}${name}</strong> 고객님, 문의해주셔서 감사합니다.<br>
            엘림 전담 수석 컨설턴트가 <strong>${phone}</strong> 번호로 1영업일 이내에 AI 아카이브 맞춤 진단서와 함께 연락드리겠습니다.
          </p>
          <div style="display: flex; gap: 0.75rem; justify-content: center;">
            <a href="tel:010-2241-0591" class="btn-primary" style="padding: 0.65rem 1.25rem;">전화로 바로 연결</a>
            <button class="btn-secondary" onclick="this.closest('.modal-overlay').remove()">닫기</button>
          </div>
        </div>
      `;
      document.body.appendChild(successModal);
      form.reset();
      setTimeout(() => { submitBtn.innerHTML = origBtnHtml; }, 5000);
    });
  });
}

/* --------------------------------------------------------------------------
   9. Floating AI Assistant Chatbot
   -------------------------------------------------------------------------- */
function initAIChatbot() {
  const toggleBtn = document.getElementById('aiChatToggle');
  const chatWindow = document.getElementById('aiChatWindow');
  const closeBtn = document.getElementById('aiChatClose');
  const sendBtn = document.getElementById('chatSendBtn');
  const input = document.getElementById('chatInput');
  const chatBody = document.getElementById('chatBody');

  if (!toggleBtn || !chatWindow) return;

  toggleBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
    if (chatWindow.classList.contains('active')) {
      input.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('active');
    });
  }

  function handleSend() {
    const text = input.value.trim();
    if (!text) return;

    // Append user message
    appendMessage(text, 'user');
    input.value = '';

    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-bubble bot';
    typingIndicator.id = 'botTyping';
    typingIndicator.innerHTML = '<span class="animate-pulse">엘림 AI가 답변을 작성 중입니다...</span>';
    chatBody.appendChild(typingIndicator);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      if (document.getElementById('botTyping')) {
        document.getElementById('botTyping').remove();
      }
      const response = generateAIResponse(text);
      appendMessage(response, 'bot');
    }, 700);
  }

  if (sendBtn) sendBtn.addEventListener('click', handleSend);
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    });
  }

  function appendMessage(text, sender) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text;
    chatBody.appendChild(bubble);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function generateAIResponse(query) {
    const q = query.toLowerCase();

    if (q.includes('비용') || q.includes('가격') || q.includes('금액') || q.includes('얼마')) {
      return `<strong>AI 아카이브 마케팅 패키지 안내</strong><br>
      • <strong>표준 플랜</strong>: 월 30건(연 360건) 웹기사 아카이브 + 포털 색인<br>
      • <strong>프리미엄 플랜</strong>: 월 60건(연 720건) 대규모 웹기사 아카이브 + AI 숏폼 영상 제작 + 해외 바이어 연계 지원<br>
      기업 규모와 업종에 따라 맞춤 견적을 제공해 드립니다. 지금 우측 폼이나 <strong>010-2241-0591</strong>로 문의주시면 상세 제안서를 보내드립니다!`;
    }

    if (q.includes('아카이브') || q.includes('차이') || q.includes('광고')) {
      return `<strong>AI 아카이브 마케팅의 핵심 차별점:</strong><br>
      일반 광고는 돈을 낼 때만 반짝 노출되지만, <strong>AI 아카이브는 기업의 기술, 제품, 인증, 스토리를 글로벌 포털에 영구 축적</strong>합니다.<br>
      ChatGPT, Gemini, Perplexity 등 생성형 AI가 검색할 때 귀사 정보를 최우선 인용하도록 구조를 설계합니다.`;
    }

    if (q.includes('지자체') || q.includes('군') || q.includes('시') || q.includes('공공')) {
      return `<strong>지자체·공공기관 특화 아카이브</strong><br>
      정책·사업, 관광·축제, 농·특산물, 기업·투자, 복지·생활, 뉴스·성과 정보를 공식 출처 중심으로 정리하고 지속 관리합니다.<br>
      '1분 만에 이해하는 만화 설명'의 [지자체·공공기관 아카이브] 탭에서 구성과 흐름을 확인해보세요.`;
    }

    if (q.includes('전화') || q.includes('연락') || q.includes('상담')) {
      return `엘림 대표 직통 번호는 <strong><a href="tel:010-2241-0591" style="color:var(--accent-cyan); text-decoration:underline;">010-2241-0591</a></strong> 입니다. 전화나 문자 주시면 즉시 상담 가능합니다!`;
    }

    if (q.includes('위치') || q.includes('주소') || q.includes('찾아')) {
      return `엘림 본사 주소는 <strong>서울 금천구 가산디지털2로 14 (가산동, 대륭테크노타운12차) 414호</strong> 입니다. 1호선/7호선 가산디지털단지역에서 가깝습니다.`;
    }

    return `문의주셔서 감사합니다! 엘림(ELIM)은 20년 역사의 온라인 마케팅 노하우를 바탕으로 <strong>생성형 AI 시대 최고의 AI 아카이브 마케팅 솔루션</strong>을 제공합니다.<br>
    더 자세한 안내가 필요하시면 <strong>010-2241-0591</strong>로 편하게 연락주시거나 상담 신청 폼을 남겨주세요!`;
  }
}
