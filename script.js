// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.focus({ preventScroll: true });
      window.scrollTo({
        top: section.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      });
      history.replaceState(null, null, '#' + targetId);
    }
  });
});

// Toggle project descriptions on click
document.querySelectorAll('.project-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const description = button.nextElementSibling;

    // Optional: Close other open descriptions
    document.querySelectorAll('.project-description').forEach(desc => {
      if (desc !== description) {
        desc.classList.remove('active');
      }
    });

    // Toggle selected description
    description.classList.toggle('active');
  });
});
