AOS.init();

const countdownElement = document.querySelector('.hero__text');
const targetDate = new Date('2026-05-04T10:00:00');

const segundosEmMs = 1000;
const minutosEmMs = segundosEmMs * 60;
const horasEmMs = minutosEmMs * 60;
const diasEmMS = horasEmMs * 24;

function updateCountdown() {
    const now = new Date();
    const diasAteOEvento = targetDate.getTime() - now.getTime();

    if (diasAteOEvento <= 0) {
        countdownElement.textContent = 'A viagem já começou ou já acabou!';
        return;
    }

    const days = Math.floor(diasAteOEvento / diasEmMS);
    const hours = Math.floor((diasAteOEvento % diasEmMS) / horasEmMs);
    const minutes = Math.floor((diasAteOEvento % horasEmMs) / minutosEmMs);
    const seconds = Math.floor((diasAteOEvento % minutosEmMs) / segundosEmMs);

    countdownElement.innerHTML = `A viagem mais esperada em anos começa em<br>${days}D ${hours}H ${minutes}M ${seconds}S`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
