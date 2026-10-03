/**
 * KOEIA 스마트 AI 수출입 도우미 챗봇 모듈
 */

function initChatbot() {
  const launcher = document.getElementById("chatbot-launcher-btn");
  const windowEl = document.getElementById("chatbot-window");
  const closeBtn = document.getElementById("chatbot-close-btn");
  const chatBody = document.getElementById("chat-body");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("chat-send-btn");
  const quickPrompts = document.querySelectorAll(".prompt-chip");

  if (!launcher || !windowEl || !chatBody) return;

  let isOpen = false;

  function toggleChat(forceOpen = null) {
    isOpen = forceOpen !== null ? forceOpen : !isOpen;
    windowEl.style.display = isOpen ? "flex" : "none";
    if (isOpen) {
      chatInput.focus();
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  launcher.addEventListener("click", () => toggleChat());
  if (closeBtn) closeBtn.addEventListener("click", () => toggleChat(false));

  // Quick Prompt Chips
  quickPrompts.forEach((chip) => {
    chip.addEventListener("click", () => {
      const text = chip.textContent.trim();
      sendUserMessage(text);
    });
  });

  // Handle Input Submit
  function handleSend() {
    const msg = chatInput.value.trim();
    if (!msg) return;
    sendUserMessage(msg);
    chatInput.value = "";
  }

  if (sendBtn) sendBtn.addEventListener("click", handleSend);
  if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });
  }

  function sendUserMessage(text) {
    // Append User Message
    appendMessage(text, "user");

    // Show Typing Indicator
    const typingId = appendTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator(typingId);
      const answer = generateBotAnswer(text);
      appendMessage(answer, "bot");
    }, 600);
  }

  function appendMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-msg msg-${sender}`;
    msgDiv.innerHTML = text.replace(/\n/g, "<br/>");
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function appendTypingIndicator() {
    const id = "typing-" + Date.now();
    const div = document.createElement("div");
    div.id = id;
    div.className = "chat-msg msg-bot";
    div.innerHTML = `<span class="live-dot" style="margin-right: 6px;"></span> 답변 생성 중...`;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
    return id;
  }

  function removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function generateBotAnswer(query) {
    if (!window.KOEIA_DATA) return "한국온라인수출입연합회 안내 도우미입니다. 무엇을 도와드릴까요?";

    const queryLower = query.toLowerCase();
    const knowledge = window.KOEIA_DATA.chatbotKnowledge;

    for (const k of knowledge) {
      const matched = k.keywords.some((word) => queryLower.includes(word.toLowerCase()));
      if (matched) {
        return k.response;
      }
    }

    // Default intelligent response
    return `질문해 주신 내용에 대해 안내해 드립니다.

한국온라인수출입연합회(KOEIA)는 **AI 웹아카이브 구축**, **18개국 글로벌 정부/상공회의소 B2B 매칭**, **K-콘텐츠 인플루언서 숏폼 마케팅**, **무역 서식 및 통관 상담**을 원스톱으로 지원하고 있습니다.

더 구체적인 1:1 맞춤 상담이 필요하시면, 상단 **[1:1 상담 예약]** 또는 사무국(02-6959-1140 / prayer111@hanmail.net)으로 연락 주시면 전문 간사가 상세히 안내해 드리겠습니다.`;
  }
}

document.addEventListener("DOMContentLoaded", initChatbot);
