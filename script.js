document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.focus({preventScroll:true});
      window.scrollTo({
        top: section.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      });
      history.replaceState(null, null, '#' + targetId);
    }
  });
});