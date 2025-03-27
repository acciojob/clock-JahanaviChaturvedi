//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    timerElement.textContent = now.toLocaleString('en-US', options);
}
updateTimer();
setInterval(updateTimer, 1000);