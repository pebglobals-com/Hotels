document.addEventListener('DOMContentLoaded', function () {
  var navToggler = document.getElementById('navToggler');
  var navbar = document.getElementById('navbar');
  if (navToggler && navbar) { navToggler.addEventListener('click', function () { navbar.classList.toggle('open'); navToggler.classList.toggle('active'); }); }
  var dropdownToggles = document.querySelectorAll('.nav-item.dropdown > .nav-link.dropdown-toggle');
  dropdownToggles.forEach(function (toggle) { toggle.addEventListener('click', function (e) { if (window.innerWidth <= 991) { e.preventDefault(); var parent = toggle.parentElement; parent.classList.toggle('open'); } }); });
  var nav = document.getElementById('nav');
  if (nav) { window.addEventListener('scroll', function () { if (window.scrollY > 100) { nav.classList.add('scrolled'); } else { nav.classList.remove('scrolled'); } }); }
  if (typeof Fancybox !== 'undefined') { Fancybox.bind('[data-fancybox="gallery"]', { Toolbar: { display: { left: ['infobar'], middle: ['zoomIn', 'zoomOut', 'toggle1to1', 'rotateCCW', 'rotateCW', 'flipX', 'flipY'], right: ['slideshow', 'fullscreen', 'thumbs', 'close'] } }, Thumbs: { type: 'classic' } }); }
  var progressBar = document.querySelector('.scroll-progress');
  if (progressBar) { window.addEventListener('scroll', function () { var scrollTop = window.scrollY; var docHeight = document.documentElement.scrollHeight - window.innerHeight; var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0; progressBar.style.width = pct + '%'; }); }
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeEls.length > 0) { var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }); fadeEls.forEach(function (el) { observer.observe(el); }); } else { fadeEls.forEach(function (el) { el.classList.add('visible'); }); }
  var arrival = document.getElementById('avail-arrival');
  var departure = document.getElementById('avail-departure');
  if (arrival && departure) { var today = new Date(); var tomorrow = new Date(today); tomorrow.setDate(tomorrow.getDate() + 1); var fmt = function (d) { var y = d.getFullYear(); var m = String(d.getMonth() + 1).padStart(2, '0'); var day = String(d.getDate()).padStart(2, '0'); return y + '-' + m + '-' + day; }; arrival.value = fmt(today); departure.value = fmt(tomorrow); arrival.min = fmt(today); departure.min = fmt(tomorrow); arrival.addEventListener('change', function () { var d = new Date(arrival.value); d.setDate(d.getDate() + 1); departure.min = fmt(d); if (new Date(departure.value) <= new Date(arrival.value)) { departure.value = fmt(d); } }); }
  var newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) { newsletterForm.addEventListener('submit', function (e) { e.preventDefault(); var input = newsletterForm.querySelector('input[type="email"]'); var btn = newsletterForm.querySelector('button[type="submit"]'); if (input && input.value.trim() !== '') { btn.textContent = 'Subscribed!'; btn.style.background = '#934200'; btn.style.color = '#fff'; input.value = ''; setTimeout(function () { btn.textContent = 'Subscribe'; btn.style.background = ''; btn.style.color = ''; }, 3000); } }); }
  var navLinks = document.querySelectorAll('#navbar .nav-link');
  navLinks.forEach(function (link) { link.addEventListener('click', function () { if (window.innerWidth <= 991) { navbar.classList.remove('open'); navToggler.classList.remove('active'); } }); });
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) { anchor.addEventListener('click', function (e) { var target = document.querySelector(this.getAttribute('href')); if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }); });
});