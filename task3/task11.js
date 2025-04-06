function theWorld(ms) {
    const end = Date.now() + ms;
    let lastSeconds = Math.ceil(ms / 1000);
    console.log(`Time will continue running in ${lastSeconds}`);
    
    const intervalId = setInterval(() => {
        const remaining = end - Date.now();
        if (remaining <= 0) {
            clearInterval(intervalId);
            console.log('Time will continue running in 0');
            return;
        }
        const currentSeconds = Math.ceil(remaining / 1000);
        if (currentSeconds < lastSeconds) {
            lastSeconds = currentSeconds;
            console.log(`Time will continue running in ${lastSeconds}`);
        }
    }, 100);
}
console.log('Выведется до остановки времени');

theWorld(3000); // или await theWorld(3000), если решать через асинхронность

// Выведется в консоли:
// "Time will continue running in 3"
// "Time will continue running in 2"
// "Time will continue running in 1"
// "Time will continue running in 0"

console.log('Выведется после того, как время продолжит ход');