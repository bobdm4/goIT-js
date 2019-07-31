const changer = document.getElementById("theme-switch-control")
const userSet = localStorage.getItem('theme')
changer.addEventListener('change', changeTheme)
defSet()

function defSet() {
  if (userSet === 'dark') {
    document.body.classList.add('dark-theme');
    changer.checked = true;
  }
}

function changeTheme() {
  if (changer.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', "dark")
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.removeItem('theme');
  }
}
