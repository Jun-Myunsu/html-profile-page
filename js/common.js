// 공통 컴포넌트 로드 함수
// async function loadComponent(elementId, filePath) {
//   try {
//     const response = await fetch(filePath);
//     const html = await response.text();
//     document.getElementById(elementId).innerHTML = html;
//   } catch (error) {
//     console.error("컴포넌트 로드 실패:", error);
//   }
// }

// 페이지 로드 시 실행
// document.addEventListener("DOMContentLoaded", async () => {
//   await loadComponent("header", "/html/common/header.html");
//   await loadComponent("footer", "/html/common/footer.html");
//   initDarkMode();
// });

import { headerHTML } from "/components/header.js";
import { footerHTML } from "/components/footer.js";

// 컴포넌트 로드
document.getElementById("header").innerHTML = headerHTML;
document.getElementById("footer").innerHTML = footerHTML;

// 다크 모드 초기화 함수
function initDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const darkModeIcon = document.getElementById("darkModeIcon");
  const body = document.body;

  // 다크 모드 상태 확인
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    body.classList.add("dark");
    darkModeIcon.textContent = "☀️";
  }

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    darkModeIcon.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isDark);
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  document.getElementById("modalContent").innerHTML = `
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>메시지:</strong> ${message}</p>
    `;

  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("flex");

  this.reset();
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("modal").classList.remove("flex");
});

document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.add("hidden");
    this.classList.remove("flex");
  }
});
