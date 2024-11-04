document.getElementById('light-mode').addEventListener('click', function() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  });
  
  document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  });

  function toggleMenu() {
    document.querySelector('header').classList.toggle('nav-visible');
}