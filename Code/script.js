// 1. Form đăng ký email
const form = document.getElementById('signup-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value.trim();
    if (!email) return;
    form.innerHTML = '<p class="thanks">Cảm ơn bạn! LIU sẽ liên hệ sớm 🌿</p>';
  });
}

// 2. Làm nổi mục menu đang xem
const links = document.querySelectorAll('nav a[href^="#"]');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  let current = null;
  sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
  links.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--red)' : '';
  });
}, { passive: true });
