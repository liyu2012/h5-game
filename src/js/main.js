import { AneObj } from './ane'
import { Fruit } from './fruit'
import { background } from './bg'
import { MomFish } from './mom'
let c1, c2, pen1, pen2, w, h, lastTime, deltaTime, mx, my
let bg
let ane
let fruit
let mom
export { c1, c2, pen1, pen2, w, h, mx, my, lastTime, deltaTime, bg, ane }

function gameStart() {
    init()
    lastTime = Date.now()
    deltaTime = 0
    gameloop()
}

function onMove(e) {
    if (e.offsetX) {
        mx = e.offsetX
        my = e.offsetY
    }
    // console.log(mx)
}

function init() {
    c1 = document.getElementById('c1')
    c2 = document.getElementById('c2')
    pen1 = c1.getContext('2d')
    pen2 = c2.getContext('2d')
    c1.addEventListener('mousemove', onMove, false)
    w = c1.width
    h = c1.height
    mx = w / 2
    my = h / 2
    bg = new Image()
    bg.src = "./img/background.jpg"
    background()
    ane = new AneObj()
    ane.init()
    fruit = new Fruit()
    fruit.init()
    mom = new MomFish()
    mom.init()
}


function gameloop() {
    window.requestAnimationFrame(gameloop)
    let now = new Date()
    deltaTime = now - lastTime
    lastTime = now
    ane.draw()
    pen1.clearRect(0, 0, w, h)
    fruit.draw()
    mom.draw()

    //console.log(deltaTime)





}
gameStart()