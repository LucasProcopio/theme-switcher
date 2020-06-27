const darkTheme = document.getElementById('dark');
const lightTheme = document.getElementById('light');
const solarTheme = document.getElementById('solar');
const body = document.body;

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if(theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

darkTheme.onclick = () => {
  body.classList.remove('light');
  body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

lightTheme.onclick = () => {
  body.classList.remove('dark');
  body.classList.add('light');
  localStorage.setItem('theme', 'light');
}

solarTheme.onclick = () => {
  if(body.classList.contains('solar')) {
    body.classList.remove('solar');
    solarTheme.style.cssText = '--bg-solar: var(--yellow)';
    solarTheme.innerText = 'solarize';
    localStorage.removeItem('isSolar');
  } else {
    body.classList.add('solar');
    solarTheme.style.cssText = '--bg-solar: white';
    solarTheme.innerText = 'solar';
    localStorage.setItem('isSolar', 'true');
  }
}