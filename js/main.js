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
