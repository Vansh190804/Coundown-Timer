let play = document.querySelector(".stop")
let reset = document.querySelector(".reset")
let res = document.querySelector(".restart")
let hour = document.querySelector("#t_hour")
let min = document.querySelector("#t_min")
let sec = document.querySelector("#t_sec")
let imgplay = document.querySelector("#play")
let playp = document.querySelector("#play_p")




let timer_sec
let timerun_sec = false

const default_a = {
    value: null
}
const default_b = {
    value: null
}
const default_c = {
    value: null
}

function completion(){
    alert("Time's Up")
}

play.addEventListener("click", () => {
    if (default_a.value == null) {
        default_a.value = sec.value
        default_b.value = min.value
        default_c.value = hour.value
    }
    second()
})

function second() {
        if (min.value < 60) {
            if (sec.value < 60) {
                if (timerun_sec) {
                    clearInterval(timer_sec)
                    imgplay.src = "play.svg"
                    playp.innerHTML = "START"
                    timerun_sec = false
                }
                else {
                    timer_sec = setInterval(displaytime, 1000)
                    timerun_sec = true
                }
            }
            else {
                alert("Use the minute box")
            }
        }
        else{
            alert("Use the hour box")
        }
   }



function displaytime() {
    a = sec.value
    b = min.value
    c = hour.value
    if (a == 0 && b == 0 && c == 0) {
        clearInterval(timer_sec)
        if (sec.value != "" || min.value != "" || hour.value != "") {
            imgplay.src = "play.svg"
            playp.innerHTML = "START"
        }
        sec.value = null
        min.value = null
        hour.value = null
        completion()
    }
    else {
        sec.value = a - 1;
        imgplay.src = "pause.svg"
        playp.innerHTML = "STOP"
        if (sec.value < 0 && hour.value > 0 && min.value <= 0) {
            min.value = 59
            sec.value = 59
            hour.value--
        }
        if (sec.value < 0 && min.value > 0) {
            sec.value = 59
            min.value--
        }
    }
}




// RESTART
res.addEventListener("click", () => {
    if (playp.innerHTML == "STOP") {
        sec.value = default_a.value
        min.value = default_b.value
        hour.value = default_c.value
    }
    else {
        sec.value = default_a.value
        min.value = default_b.value
        hour.value = default_c.value
        second()
    }
    console.log(timerun_sec)
})

// RESET
reset.addEventListener("click", () => {
    hour.value = null
    min.value = null
    sec.value = null
    default_a.value = null
    default_b.value = null
    default_c.value = null
    imgplay.src = "play.svg"
    playp.innerHTML = "START"
    clearInterval(timer_sec)
})
























