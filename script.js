const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const days10 = document.getElementById('days');
const hours10 = document.getElementById('hours');
const minutes10 = document.getElementById('minutes');
const seconds10 = document.getElementById('seconds');


const countdown = document.getElementById('countdown');
const countdown10 = document.getElementById('countdown10');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

year.innerText = currentYear + 1;

const newYearTime = new Date(`June 30 ${currentYear} 00:00:00`);
const newYearTime10 = new Date(`June 10 ${currentYear} 00:00:00`);

console.log(currentYear, newYearTime);

function updateCountDown(){
    const currentYear = new Date();

    const diff = newYearTime - currentYear;
    const diff10 = newYearTime10 - currentYear;
    
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
  
    // Add values to DOM
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    
    const d10 = Math.floor(diff10 / 1000 / 60 / 60 / 24);
    const h10 = Math.floor(diff10 / 1000 / 60 / 60) % 24;
    const m10 = Math.floor(diff10 / 1000 / 60) % 60;
    const s10 = Math.floor(diff10 / 1000) % 60;
    
    // Add values to DOM
    days10.innerHTML = d10;
    hours10.innerHTML = h10 < 10 ? '0' + h10 : h10;
    minutes10.innerHTML = m10 < 10 ? '0' + m10 : m10;
    seconds10.innerHTML = s10 < 10 ? '0' + s10 : s10;
    
}

//show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
    countdown10.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountDown, 1000);
