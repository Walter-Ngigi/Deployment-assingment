// ========== GLOBAL SELECTORS ==========
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');

// ========== 1. DARK MODE TOGGLE ==========

// Load theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') body.classList.add('dark');
});

// Toggle theme and save it
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});

// ========== 2. FORM VALIDATION ==========
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // Simulate a successful submission
  alert('Thanks for subscribing! 🎉');
  localStorage.setItem('subscribedEmail', email);
  form.reset();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ========== 3. TYPEWRITER TEXT EFFECT ==========
const typedText = document.querySelector('.typed-text');
const words = ['My Blog', 'Your Story', 'Code World'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentChars = currentWord.slice(0, charIndex);

  typedText.textContent = currentChars;

  if (!isDeleting) {
    charIndex++;
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  const speed = isDeleting ? 80 : 120;
  setTimeout(typeEffect, speed);
}

typeEffect();
