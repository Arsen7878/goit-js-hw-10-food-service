const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector('#theme-switch-toggle');

checkbox.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
  e.preventDefault();
  document.body.classList.remove(Theme.LIGHT);
  document.body.classList.add(Theme.DARK);

  if (!e.target.checked) {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
  }
}
