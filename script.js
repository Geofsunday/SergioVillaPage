const links = [...document.querySelectorAll('.site-header nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href')));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        links.forEach(link => {
          const active = link.hash === '#' + entry.target.id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }
  }, {rootMargin: '-15% 0px -55% 0px', threshold: 0});
  sections.forEach(section => observer.observe(section));
}
