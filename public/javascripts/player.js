let song = document.querySelector('audio');
let playBtn = document.querySelector('#play');
let time = document.querySelector('#time');

let flag = 1;
playBtn.addEventListener("click", function () {
    if (flag === 0) {
        song.play();
        playBtn.classList.remove('ri-play-circle-fill')
        playBtn.classList.add("ri-pause-circle-fill");
        flag = 1;


    } else {
        song.pause();
        playBtn.classList.add('ri-play-circle-fill')
        playBtn.classList.remove("ri-pause-circle-fill");
        flag = 0;
    }
})

song.ontimeupdate = function () {
    let cTime = song.currentTime;
    duration = song.duration;
    if (cTime === this.duration) {
        playBtn.classList.add('ri-play-circle-fill')
        playBtn.classList.remove("ri-pause-circle-fill");
        time.children[0].textContent = `${0}:${0}`;
        document.querySelector("#slider").style.width = 0;


    }



    time.children[1].textContent = `${getMIn(duration)}:${getSec((duration / 60).toFixed(2))}`;
    time.children[0].textContent = `${getMIn(cTime)}:${getSec((cTime / 60).toFixed(2))}`;
    let deg = 1;
    let prg = (cTime - .25) / duration * 100 + "%";

    document.querySelector("#slider").style.width = prg;


}
function getMIn(n) {
    return Math.floor(n / 60);
}
function getSec(min) {
    let sec = min % 1;
    return Math.floor(sec * 60);
}