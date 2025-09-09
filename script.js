const welcome = document.getElementById("welcome");
const welcomeText = document.getElementById("welcome-text");
const messages = ["Welcome to My Portfolio", "Hi, Saya Fahreza"];
let index = 0, charIndex = 0;

function typeWriter() {
  if (charIndex < messages[index].length) {
    welcomeText.textContent += messages[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      welcome.style.opacity = 0;
      setTimeout(() => welcome.classList.add("hidden"), 800);
    }, 1200);
  }
}
window.onload = typeWriter;

const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
