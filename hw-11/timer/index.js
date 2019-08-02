class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.days = document.querySelector('span[data-value="days"]');
        this.hours = document.querySelector('span[data-value="hours"]');
        this.mins = document.querySelector('span[data-value="mins"]');
        this.secs = document.querySelector('span[data-value="secs"]');
        this.timer = document.querySelector('.timer');
        this.work();
    }
    work() {
        setInterval(() => {
            const now = new Date().getTime();
            const time = this.targetDate - now;
            const days = document.querySelector('span[data-value="days"]');
            const hours = document.querySelector('span[data-value="hours"]');
            const mins = document.querySelector('span[data-value="mins"]');
            const secs = document.querySelector('span[data-value="secs"]');
            days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
            hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            secs.textContent = Math.floor((time % (1000 * 60)) / 1000);
        }, 1000);
    }
}

const countTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 11, 2019'),
});
