import { c1, c2, pen1, mx, my, pen2, w, h, lastTime, deltaTime, ane } from './main'
import { lerD, lerAngle } from './common'
export class MomFish {
    constructor() {
        this.x
        this.y
        this.angle = 0
        this.bigEye = new Image()
        this.bigBody = new Image()
        this.bigTail = new Image()
    }
    init() {
        this.x = w / 2
        this.y = h / 2
        this.mx = w / 2
        this.my = h / 2
        this.bigEye.src = './img/bigEye0.png'
        this.bigTail.src = './img/bigTail0.png'
        this.bigBody.src = './img/big.png'

    }
    draw() {
        this.x = lerD(mx, this.x, 0.9)
        this.y = lerD(my, this.y, 0.9)
        let dx = mx - this.x
        let dy = my - this.y
        this.angle = lerAngle(Math.atan2(-dy, -dx), this.angle, .6)
        console.log(this.angle)
        pen1.save()
        pen1.translate(this.x, this.y)
        pen1.rotate(this.angle)
        pen1.drawImage(this.bigEye, this.bigEye.width / 2, this.bigEye.height / 2)
        pen1.drawImage(this.bigBody, this.bigEye.width / 2 - this.bigBody.width / 2 + 6, this.bigEye.height / 2 - this.bigBody.height / 2 + 5)
        pen1.drawImage(this.bigTail, this.bigEye.width / 2 + 20, this.bigEye.height / 2 - 15)
        pen1.restore()
    }
}