// "Hayır" butonuna her basıldığında gösterilecek mesajlar.
// İstediğin gibi değiştirebilir, ekleyip çıkarabilirsin.
const messages = [
  "Emin misin?",
  "Gerçekten emin misin??",
  "Bir daha düşün lütfen...",
  "Hayır deme lütfen",
  "Yüzüme bak da öyle söyle...",
  "Peki tamam, artık sormayacağım...",
  "Şaka yaptım, lütfen evet de! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    // Tüm mesajlar bittiyse, bir sonraki "Hayır" tıklaması hayır sayfasına gider
    if (messageIndex >= messages.length) {
        window.location.href = "no_page.html";
        return;
    }

    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex++;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
