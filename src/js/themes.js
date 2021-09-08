const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector('#theme-switch-toggle');
const light = Theme.LIGHT;
const dark = Theme.DARK;
let currentThemStr = localStorage.getItem('theme');
cacheChange();

checkbox.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
  e.preventDefault();

  if (!e.target.checked) {
    toggleTheme(light, dark);
    localStorage.setItem('theme', light);
  }
  if (e.target.checked) {
    toggleTheme(dark, light);
    localStorage.setItem('theme', dark);
  }
}

function toggleTheme(currentThem, nextTheme) {
  document.body.classList.remove(nextTheme);
  document.body.classList.add(currentThem);
}

function cacheChange() {
  if (currentThemStr === null) {
    return;
  }
  if (currentThemStr === light) {
    document.body.classList.add(light);
    checkbox.checked = false;
  } else {
    document.body.classList.add(dark);
    checkbox.checked = true;
  }
}
