// Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.querySelector(".progress-bar").style.width = (scrollTop / height) * 100 + "%";
});

// Fade Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
document.querySelectorAll('.fade').forEach(el => observer.observe(el));

// Typing Effect
const text = "Srinivas Bonthu";
let i = 0;

function type() {
  const el = document.getElementById("typing");
  if (!el) return;

  el.innerHTML = text.slice(0, i++);
  if (i <= text.length) setTimeout(type, 100);
}
window.onload = type;

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button
function openModal() {
  document.getElementById("contactModal").style.display = "block";
}

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

// Close when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("contactModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
