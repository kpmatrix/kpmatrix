
/* =================================
   KPMATRIX - MAIN JAVASCRIPT
================================= */

// 1. Smooth Navigation
document.querySelectorAll('.bottom-nav a').forEach(link => {
  link.addEventListener('click', function(event) {
    const target = this.getAttribute('href');

    if (target && target.startsWith('#')) {
      const section = document.querySelector(target);

      if (section) {
        event.preventDefault();

        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});


// 2. Dark Mode / Light Mode
const themeButton = document.getElementById('themeToggle');

if (themeButton) {
  themeButton.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    const isDark = document.body.classList.contains('dark-mode');

    themeButton.textContent = isDark
      ? '☀️ LIGHT MODE'
      : '🌙 DARK MODE';

  });
}


// 3. Project Click Effect
document.querySelectorAll('.project').forEach(project => {

  project.addEventListener('click', () => {
    project.classList.toggle('selected');
  });

});


// 4. TAPE Dashboard Demo Data
const refreshButton = document.getElementById('refreshPrice');

if (refreshButton) {

  refreshButton.addEventListener('click', () => {

    const price = (
      60000 + Math.random() * 15000
    ).toFixed(2);

    const priceElement = document.getElementById('price');
    const changeElement = document.getElementById('change');

    if (priceElement) {
      priceElement.textContent =
        '$' + Number(price).toLocaleString('en-US');
    }

    if (changeElement) {
      changeElement.textContent = '+2.45% DEMO DATA';
    }

  });

}


// 5. Project Hover / Selection
document.querySelectorAll('.project-item').forEach(item => {

  item.addEventListener('click', () => {

    document.querySelectorAll('.project-item')
      .forEach(project => project.classList.remove('selected'));

    item.classList.add('selected');

  });

});


// 6. Website Loaded
console.log('KPMATRIX website loaded successfully!');

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.classList.add("hide");

    setTimeout(() => {
      loader.remove();
    }, 500);
  }
});
