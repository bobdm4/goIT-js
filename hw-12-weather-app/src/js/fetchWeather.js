const form = document.querySelector('.search-form');
const inputCity = document.querySelector('input')
const baseUrl = 'http://api.apixu.com/v1';
const resource = '/current.json';
const regKey = '?key=fd99f0f33339427587270934190508&q=';
const box = document.querySelector('#weather');

form.addEventListener('submit', userChoice);

function userChoice(e) {
  e.preventDefault();
  let city = inputCity.value;
  box.classList.remove('is-hidden');
  fetch(baseUrl + resource + regKey + city )
    .then(response => response.json())
    .then(weather => {
      console.log(weather);
      document.querySelector('span[data-field="location"]').textContent = weather.location.name;
      document.querySelector('span[data-field="temp"]').textContent = weather.current.feelslike_c + ' ℃';
      document.querySelector('span[data-field="humidity"]').textContent = weather.current.humidity + '%';
      document.querySelector('span[data-field="wind"]').textContent = weather.current.wind_kph + ' kph';
      document.querySelector('span[data-field="conditions"]').textContent = weather.current.condition.text;
      document.querySelector('.icon').src = weather.current.condition.icon
    });
};