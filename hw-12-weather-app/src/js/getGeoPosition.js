import PNotify from 'pnotify/dist/es/PNotify';
const box = document.querySelector('#weather');
const baseUrl = 'https://api.apixu.com/v1';
const resource = '/current.json';
const regKey = '?key=fd99f0f33339427587270934190508&q=';

const getCurrentPosition = () => {
  const options = {
    timeout: 5000,
    maximumAge: 30 * 60 * 60 * 1000,
  }
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      res,
      rej,
      options)
  })
}

getCurrentPosition()
  .then(position => {
    fetch(baseUrl + resource + regKey + `${position.coords.latitude},${position.coords.longitude}`)
      .then(response => response.json())
      .then(weather => {
        document.querySelector('span[data-field="location"]').textContent = weather.location.name;
        document.querySelector('span[data-field="temp"]').textContent = weather.current.feelslike_c + ' ℃';
        document.querySelector('span[data-field="humidity"]').textContent = weather.current.humidity + '%';
        document.querySelector('span[data-field="wind"]').textContent = weather.current.wind_kph + ' kph';
        document.querySelector('span[data-field="conditions"]').textContent = weather.current.condition.text;
        document.querySelector('.icon').src = weather.current.condition.icon
      });
    box.classList.remove('is-hidden');

    PNotify.success({
      title: 'Отличный выбор!',
      text: 'Я сделаю все сам!'

    });
  })
  .catch(error => {

    PNotify.error({
      title: 'Ok, ok, ok',
      text: 'Теперь ты ниндзя!'
    });
    box.classList.add('is-hidden');
  });