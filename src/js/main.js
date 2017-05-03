//导入所需模块
import { AneObj } from './ane'
import { Fruit } from './fruit'
import { background } from './bg'
import { MomFish } from './mom'
import { BabyFish } from './baby'
import { Data } from './data'
import { Wave } from './wave'
import { Halo } from './halo'
import { Dust } from './dust'
import { momFruitsCollision, momBabyCollision } from './collision'
//定义需要的全局变量
let c1, c2, pen1, pen2, w, h, lastTime, deltaTime, mx, my, bg,
    ane,
    data,
    wave,
    halo,
    dust, dustPic = [],
    fruit, mom, baby, babyTailArray = [],
    babyEyeArray = [],
    babyBodyArray = [],
    momTail = [],
    momEye = [],
    momBodyOrange = [],
    momBodyBlue = []
    //共享模块内变量
export { dust, dustPic, halo, wave, c1, baby, c2, data, momBodyBlue, momBodyOrange, momEye, pen1, momTail, babyTailArray, babyBodyArray, babyEyeArray, mom, fruit, pen2, w, h, mx, my, lastTime, deltaTime, bg, ane }

function gameStart() {
    //初始化全局变量
    init()
    lastTime = Date.now()
    deltaTime = 0
    gameloop()
}

function onMove(e) {
    if (e.offsetX && data.gameOver == false) {
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
    ane = new AneObj()
    fruit = new Fruit()
    mom = new MomFish()
    baby = new BabyFish()

    for (let i = 0; i < 8; i++) {
        babyTailArray[i] = new Image()
        babyTailArray[i].src = `./img/babyTail${i}.png`
    }
    for (let i = 0; i < 2; i++) {
        babyEyeArray[i] = new Image()
        babyEyeArray[i].src = `./img/babyEye${i}.png`
    }
    for (let i = 0; i < 2; i++) {
        momEye[i] = new Image()
        momEye[i].src = `./img/bigEye${i}.png`
    }
    for (let i = 0; i < 20; i++) {
        babyBodyArray[i] = new Image()
        babyBodyArray[i].src = `./img/babyFade${i}.png`
    }
    for (let i = 0; i < 8; i++) {
        momTail[i] = new Image()
        momTail[i].src = `./img/bigTail${i}.png`
    }
    data = new Data()
    for (let i = 0; i < 8; i++) {
        momBodyOrange[i] = new Image()
        momBodyOrange[i].src = `./img/bigEat${i}.png`
        momBodyBlue[i] = new Image()
        momBodyBlue[i].src = `./img/bigEatBlue${i}.png`
    }
    pen1.fillStyle = 'white'
    pen1.font = '30px Verdana'
    pen1.textAlign = 'center'
    wave = new Wave()
    wave.init()
    halo = new Halo()
    dust = new Dust()
    for (let i = 0; i < 7; i++) {
        dustPic[i] = new Image()
        dustPic[i].src = `./img/dust${i}.png`
    }
}


function gameloop() {
    window.requestAnimationFrame(gameloop)
    let now = new Date()
    deltaTime = now - lastTime
    if (deltaTime > 50)
        deltaTime = 50
    lastTime = now
    background()
    ane.draw()
    pen1.clearRect(0, 0, w, h)
    fruit.draw()
    mom.draw()
    baby.draw()
    momFruitsCollision()
    momBabyCollision()
    data.draw()
    wave.draw()
    halo.draw()
    dust.draw()





}
gameStart()