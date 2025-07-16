// 2. 모달 창
const modal = document.getElementById("practiceModal");
document.getElementById("openModal").addEventListener("click", function () {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

document.getElementById("closeModal").addEventListener("click", function () {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

// 3. 인사말 출력 (함수 선언 및 호출)
function generateGreeting(name) {
  if (name.trim() === "") {
    return "이름을 입력해주세요!";
  }
  return `안녕하세요, ${name}님! 반갑습니다!`;
}

document.getElementById("greetBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  const greeting = generateGreeting(name);
  document.getElementById("greetOutput").textContent = greeting;
});

// 4. 이미지 마우스 오버 효과
const hoverImage = document.getElementById("hoverImage");
const imageStatus = document.getElementById("imageStatus");

hoverImage.addEventListener("mouseenter", function () {
  this.style.transform = "scale(1.2)";
  this.style.filter = "brightness(1.2)";
  imageStatus.textContent = "마우스가 이미지 위에 있습니다!";
  imageStatus.style.color = "blue";
});

hoverImage.addEventListener("mouseleave", function () {
  this.style.transform = "scale(1)";
  this.style.filter = "brightness(1)";
  imageStatus.textContent = "이미지에 마우스를 올려보세요";
  imageStatus.style.color = "";
});

// 5. 텍스트 변경
let textChanged = false;
document.getElementById("changeTextBtn").addEventListener("click", function () {
  const textElement = document.getElementById("changeableText");

  if (!textChanged) {
    textElement.textContent = "텍스트가 변경되었습니다! 🎉";
    textElement.style.color = "green";
    this.textContent = "원래대로";
  } else {
    textElement.textContent = "원본 텍스트입니다";
    textElement.style.color = "";
    this.textContent = "텍스트 변경";
  }
  textChanged = !textChanged;
});

// 6. 구구단 출력 (for 반복문)
function generateMultiplicationTable(dan) {
  let result = `<h3 class="font-bold mb-2">${dan}단</h3>`;

  for (let i = 1; i <= 9; i++) {
    result += `<p>${dan} × ${i} = ${dan * i}</p>`;
  }

  return result;
}

document.getElementById("generateDan").addEventListener("click", function () {
  const dan = parseInt(document.getElementById("danInput").value);
  const output = document.getElementById("danOutput");

  if (dan >= 1 && dan <= 9) {
    output.innerHTML = generateMultiplicationTable(dan);
  } else {
    output.innerHTML =
      '<p class="text-red-500">1부터 9까지의 숫자를 입력해주세요!</p>';
  }
});

// 7. 조건문 실습 (if/else)
function checkAgeCategory(age) {
  if (age < 0) {
    return "올바른 나이를 입력해주세요!";
  } else if (age < 13) {
    return "어린이입니다";
  } else if (age < 20) {
    return "청소년입니다";
  } else if (age < 65) {
    return "성인입니다";
  } else {
    return "어르신입니다";
  }
}

document.getElementById("checkAge").addEventListener("click", function () {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = checkAgeCategory(age);
  document.getElementById("ageResult").textContent = result;
});

// 8. 반복문 실습 (while 반복문)
function calculateSum(n) {
  let sum = 0;
  let i = 1;

  while (i <= n) {
    sum += i;
    i++;
  }

  return sum;
}

document.getElementById("calculateSum").addEventListener("click", function () {
  const n = parseInt(document.getElementById("sumInput").value);
  const sumResult = document.getElementById("sumResult");

  if (n > 0) {
    const sum = calculateSum(n);
    sumResult.textContent = `1부터 ${n}까지의 합: ${sum}`;
  } else {
    sumResult.textContent = "양수를 입력해주세요!";
  }
});
