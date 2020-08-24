
var score = 0;
var check = true;
var audio = new Audio('m.wav')
var jump = new Audio('jump.wav')
document.onkeydown = function (e) {
    if (e.keyCode == 32) {
        jump.play();    
        var pic = document.getElementById("pic")
        pic.classList.add('picc')
        setTimeout(() => {
            pic.classList.remove('picc')
        }, 700);
    }
    else if (e.keyCode == 37) {
        var dino = document.getElementById("pic")
        var left = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = (left - 100) + "px";
    }
    else if (e.keyCode == 39) {
        var dino = document.getElementById("pic")
        var left = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = left + 100 + "px";
    }
}
setInterval(() => {
    dino = document.getElementById("pic")
    obs = document.getElementById("ima")
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))
    
    odx = parseInt(window.getComputedStyle(obs, null).getPropertyValue('left'))
    ody = parseInt(window.getComputedStyle(obs, null).getPropertyValue('top'))
    finx = Math.abs(dx - odx)
    finy = Math.abs(dy - ody)
    if(finx<120 && finy<50){
        obs.classList.remove('cc1')
        scoree = document.getElementsByTagName("p")
        scoree[0].innerHTML = "Your Score: "+ score;
        dino.classList.add("downn");
        audio.play()
        var resbut = document.getElementById('but')
        resbut.classList.remove('res1')

    }
    else if(finx<140 && check){
        // dino.classList.add("downn");
        score+=10;
        updatescore(score)
        check = false;
        setTimeout(() => {
            check=true
        }, 1000);
        
        
    }
    

}, 100);
function updatescore(){
    scoree = document.getElementsByTagName("p")
    scoree[0].innerHTML = "Your Score: "+ score;
}
setInterval(() => {
    anidur = parseInt(window.getComputedStyle(obs, null).getPropertyValue('animation-duration'))
newdur = anidur-0.00001;

obs.style.animationDuration = newdur+'s';

}, 10000);