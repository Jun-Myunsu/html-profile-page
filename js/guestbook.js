const guestbook = [];

function createGuestItem(name, message, index) {
  const item = document.createElement("div");
  item.className = "bg-white p-4 rounded-lg border shadow-sm";
  item.innerHTML = `
        <div class="flex justify-between items-start mb-2">
            <h3 class="font-bold text-lg">${(index + 1)
              .toString()
              .padStart(2, "0")}. ${name}</h3>
            <button onclick="removeGuest(${index})" 
                    class="text-red-500 hover:text-red-700 text-sm">
                삭제
            </button>
        </div>
        <p class="text-gray-700 mb-2">${message}</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleString()}</p>
    `;
  return item;
}

function updateGuestList() {
  const guestList = document.getElementById("guestList");
  const emptyMessage = document.getElementById("emptyMessage");

  guestList.innerHTML = "";

  if (guestbook.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
    guestbook.forEach((guest, index) => {
      guestList.appendChild(createGuestItem(guest.name, guest.message, index));
    });
  }
}

function removeGuest(index) {
  guestbook.splice(index, 1);
  updateGuestList();
}

document.getElementById("addBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (name && message) {
    guestbook.push({ name, message, date: new Date() });
    updateGuestList();
    document.getElementById("nameInput").value = "";
    document.getElementById("messageInput").value = "";
  } else {
    alert("이름과 메시지를 모두 입력해주세요.");
  }
});

// 초기 목록 업데이트
updateGuestList();
