/**
 * KOEIA AI 웹 아카이브 & CCO(Choice Engine Optimization) 진단 시뮬레이터
 */

function initAiDiagnostic() {
  const form = document.getElementById("ai-diag-form");
  const resultCard = document.getElementById("diag-result-card");
  const scoreNum = document.getElementById("diag-score-num");
  const scoreCircle = document.getElementById("diag-score-circle");
  const scoreLevel = document.getElementById("diag-score-level");
  const scoreDesc = document.getElementById("diag-score-desc");
  const recommendationList = document.getElementById("diag-recommendations");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const companyName = document.getElementById("diag-company-name").value.trim();
    const product = document.getElementById("diag-product").value.trim();
    const targetRegion = document.getElementById("diag-target-region").value;
    const mediaCount = parseInt(document.getElementById("diag-media-count").value || "0", 10);

    if (!companyName || !product) {
      if (window.showToast) window.showToast("회사명과 주요 수출 품목을 입력해주세요.", "warning");
      return;
    }

    // Diagnostic Calculation Simulation
    let baseScore = 42;
    if (mediaCount > 20) baseScore += 30;
    else if (mediaCount > 5) baseScore += 18;
    else if (mediaCount > 0) baseScore += 8;

    if (targetRegion === "us" || targetRegion === "eu") baseScore += 5;
    else baseScore += 10;

    const finalScore = Math.min(Math.max(baseScore, 35), 96);

    // Show loading state
    const submitBtn = form.querySelector("button[type='submit']");
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="live-dot"></span> AI 선택엔진 알고리즘 분석 중...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      resultCard.style.display = "block";
      resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });

      // Animate score counter
      let current = 0;
      const timer = setInterval(() => {
        current += 2;
        if (current >= finalScore) {
          current = finalScore;
          clearInterval(timer);
        }
        scoreNum.textContent = current;
        scoreCircle.style.background = `conic-gradient(var(--accent-cyan) 0% ${current}%, rgba(255, 255, 255, 0.1) ${current}% 100%)`;
      }, 20);

      // Recommendations & Evaluation
      let levelText = "";
      let levelColor = "";
      let descText = "";
      let recs = [];

      if (finalScore < 60) {
        levelText = "AI 노출 취약 (웹 아카이브 시급)";
        levelColor = "var(--accent-rose)";
        descText = `현재 '${companyName}'의 온라인 데이터는 생성형 AI가 신뢰도 높은 공급사로 인용하기에 웹기사 및 디지털 자산이 절대적으로 부족합니다.`;
        recs = [
          `KOEIA 정회원 가입을 통한 연간 360건 웹기사 아카이브 등재로 AI 검색 노출 점수 +45점 확보 권장`,
          `글로벌 타깃(${targetRegion.toUpperCase()})에 맞춘 영문 AQA-AEO 인증 콘텐츠 구축 필요`,
          `《AI 시대, 검색에 남는 기업은 무엇이 다른가》 가이드북 필독 권장`
        ];
      } else if (finalScore < 80) {
        levelText = "AI 노출 보통 (자산화 확장 단계)";
        levelColor = "var(--accent-gold)";
        descText = `'${companyName}'(${product})의 기본 인지도는 형성되어 있으나, 글로벌 바이어가 비교 검색(CCO) 시 타 경쟁사 대비 최종 선택 확률이 분산되어 있습니다.`;
        recs = [
          `K-POP 및 인플루언서 연계 숏폼 쇼케이스를 통해 틱톡/유튜브 AI 검색 유입 강화`,
          `공식 웹기사 아카이브에 제품 사양 및 인증서(ISO/FDA/CE) 구조화 데이터 결합`,
          `우즈베키스탄·중국 등 신흥 거점 B2B 매칭 지원사업 신청 권장`
        ];
      } else {
        levelText = "AI 노출 우수 (글로벌 톱 티어 권장)";
        levelColor = "var(--accent-emerald)";
        descText = `'${companyName}'은 우수한 디지털 신뢰 자산을 갖추고 있습니다. 이제 글로벌 파트너십과의 직접 연계로 대규모 수주를 촉진할 시기입니다.`;
        recs = [
          `KOEIA 글로벌 얼라이언스(18개국 무역관) 전담 바이어 1:1 화상 미팅 배정`,
          `해외 정부 경제특구(나보이 FZE 등) 입주 및 현지 유통망 독점 바이어 연계`,
          `연합회 공식 우수 정회원사 명예의 전당 등재`
        ];
      }

      scoreLevel.textContent = levelText;
      scoreLevel.style.color = levelColor;
      scoreDesc.textContent = descText;

      recommendationList.innerHTML = recs
        .map(
          (rec) => `
        <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">
          <span style="color: var(--accent-cyan); font-weight: bold;">✔</span>
          <span>${rec}</span>
        </li>
      `
        )
        .join("");

      if (window.showToast) {
        window.showToast(`[${companyName}] AI 진단 완료! 점수: ${finalScore}점`, "success");
      }
    }, 1200);
  });
}

document.addEventListener("DOMContentLoaded", initAiDiagnostic);
