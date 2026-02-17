const msgs = [
    "Em chắc chưa?",
    "Em chắc chắn chưa?",
    "Thật à hâm?",
    "Đừng mò?",
    "Đừng mòoooo?",
    "Anh sẽ buồn đấy",
    "Buồn nhắm đấy...",
    "Huhu",
    "Được ròi:<",
    "Đùa hui, đồng ý đi mà>< 🩷"
]

let msgIndex = 0;

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleNoClick() {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    noButton.textContent = msgs[msgIndex];
    msgIndex = (msgIndex + 1) % msgs.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}
