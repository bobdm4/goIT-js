const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
}
let changeColor = null;

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function change(color) {
    document.body.style.background = color;
};

refs.startBtn.addEventListener('click', () => {
    refs.startBtn.setAttribute('disabled', true);
    changeColor = setInterval(() => {
        change(colors[randomIntegerFromInterval(0, colors.length)])
    }, 1000)
});

refs.stopBtn.addEventListener('click', () => {
    refs.startBtn.disabled = false;
    clearInterval(changeColor)
});

