const timerValue = document.querySelector('#timer');

let timer = 86400;

function timerUpdate(){
    let hour = Math.floor(timer/3600);
    let minutes = Math.floor((timer%3600)/60);
    let seconds = (timer%60);

    timerValue.textContent = `${hour.toString().padStart(2,0)} : ${minutes.toString().padStart(2,0)} : ${seconds.toString().padStart(2,0)}`

    if(timer > 0){
        timer--;
    }
}

timerUpdate();
setInterval(timerUpdate, 1000);