// TESTING JS
console.log("Test Javascript");
console.log("Stop Watch project javascript");

// VALUABLE
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerSetting = document.querySelector('.timerDisplay');
let nb= null;

// START BUTTON
document.getElementById('button-start').addEventListener('click', () => {
    if (nb != null) {
        clearInterval(nb);
    }
    nb = setInterval(displayTimer, 10);
});

// STOP BUTTON
document.getElementById('button-stop').addEventListener('click', () => {
    clearInterval(nb);
})

// RESET BUTTON
document.getElementById('button-reset').addEventListener('click', () => {
    clearInterval(nb);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerSetting.innerHTML = '00 : 00 : 00 : 000 ';
});

// SETTING FUNCTION displayTimer
// I do not use function syntax here
// I use arrow function syntax
const displayTimer = () => {
    // Với khoảng thời gian này, độ chính xác của đồng hồ bấm giờ sẽ tốt hơn.
    // Và thời gian hiển thị trên đồng hồ sẽ gần như chính xác với thời gian thực.
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    // If the time is less than 10 then add 0
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;

    timerSetting.innerHTML = h + ' : ' + m + ' : ' + s + ' : ' + ms;
}