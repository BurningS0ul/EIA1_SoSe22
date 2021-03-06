window.addEventListener("load", Clicker);
window.addEventListener("load", Keypress);
function Clicker() {
    document.querySelector(".pad-1").addEventListener('click', function () { playSample("../assets/Drumpad/kick.mp3"); });
    document.querySelector(".pad-2").addEventListener('click', function () { playSample("../assets/Drumpad/snare.mp3"); });
    document.querySelector(".pad-3").addEventListener('click', function () { playSample("../assets/Drumpad/hihat.mp3"); });
    document.querySelector(".pad-4").addEventListener('click', function () { playSample("../assets/Drumpad/F.mp3"); });
    document.querySelector(".pad-5").addEventListener('click', function () { playSample("../assets/Drumpad/G.mp3"); });
    document.querySelector(".pad-6").addEventListener('click', function () { playSample("../assets/Drumpad/A.mp3"); });
    document.querySelector(".pad-7").addEventListener('click', function () { playSample("../assets/Drumpad/C.mp3"); });
    document.querySelector(".pad-8").addEventListener('click', function () { playSample("../assets/Drumpad/laugh-1.mp3"); });
    document.querySelector(".pad-9").addEventListener('click', function () { playSample("../assets/Drumpad/laugh-2.mp3"); });
    document.querySelector(".play").addEventListener('click', function () { playButton(); });
}
function playSample(beats) {
    var sound = new Audio(beats);
    sound.play();
}
function Keypress() {
    document.addEventListener('keydown', (event) => {
        if (event.key == "7") {
            playSample("../assets/Drumpad/kick.mp3");
            document.querySelector(".pad-1").setAttribute("style", "transition: all .3s");
            document.querySelector(".pad-1").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "8") {
            playSample("../assets/Drumpad/snare.mp3");
            document.querySelector(".pad-2").setAttribute("style", "transition: all .3s");
            document.querySelector(".pad-2").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "9") {
            playSample("../assets/Drumpad/hihat.mp3");
            document.querySelector(".pad-3").setAttribute("style", "transition: all .3s");
            document.querySelector(".pad-3").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "4") {
            playSample("../assets/Drumpad/F.mp3");
            document.querySelector(".pad-4").setAttribute("style", "transition: all .3s");
            document.querySelector(".pad-4").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "5") {
            playSample("../assets/Drumpad/G.mp3");
            document.querySelector(".pad-5").setAttribute("style", "transition: all .3s");
            document.querySelector(".pad-5").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "6") {
            playSample("../assets/Drumpad/A.mp3");
            document.querySelector(".pad-6").setAttribute("style", "transition: all .3s");
            document.querySelector(".pad-6").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "1") {
            playSample("../assets/Drumpad/C.mp3");
            document.querySelector(".pad-7").setAttribute("style", "transition: all .3s");
            document.querySelector(".pad-7").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "2") {
            playSample("../assets/Drumpad/laugh-1.mp3");
            document.querySelector(".pad-8").setAttribute("style", "transition: all .3s");
            document.querySelector(".pad-8").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "3") {
            playSample("../assets/Drumpad/laugh-2.mp3");
            document.querySelector(".pad-9").setAttribute("style", "transition: all .3s");
            document.querySelector(".pad-9").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "0") {
            playButton();
            document.querySelector(".play").setAttribute("style", "transition: all .3s");
            document.querySelector(".play").setAttribute("style", "transform: scale(0.8)");
        }
        document.addEventListener('keyup', (event) => {
            document.querySelector(".pad-1").setAttribute("style", "transform: ");
            document.querySelector(".pad-2").setAttribute("style", "transform: ");
            document.querySelector(".pad-3").setAttribute("style", "transform: ");
            document.querySelector(".pad-4").setAttribute("style", "transform: ");
            document.querySelector(".pad-5").setAttribute("style", "transform: ");
            document.querySelector(".pad-6").setAttribute("style", "transform: ");
            document.querySelector(".pad-7").setAttribute("style", "transform: ");
            document.querySelector(".pad-8").setAttribute("style", "transform: ");
            document.querySelector(".pad-9").setAttribute("style", "transform: ");
            document.querySelector(".play").setAttribute("style", "transform: ");
        });
    });
}
var Sickbeat = [
    "../assets/Drumpad/kick.mp3",
    "../assets/Drumpad/snare.mp3",
    "../assets/Drumpad/hihat.mp3"
];
function playButton() {
    var counter = 0;
    setInterval(function () {
        playSample(Sickbeat[counter]);
        counter++;
        if (counter == 3) {
            counter = 0;
        }
    }, 500);
}
//# sourceMappingURL=beat.js.map