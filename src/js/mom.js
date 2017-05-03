import { c1, c2, momBodyOrange, momBodyBlue, pen1, data, momTail, momEye, mx, my, pen2, w, h, deltaTime, ane } from './main'
import { lerD, lerAngle } from './common'
export class MomFish {
    constructor() {
        this.x
        this.y
        this.angle = 0
        this.bigBody = new Image()
        this.eyeTimer = 0
        this.eyeCount = 0
        this.eyeInterval = 5000
        this.timer = 0
        this.Count = 0
        this.bodyCount = 0
        this.init()
    }
    init() {
        this.x = w / 2
        this.y = h / 2
        this.mx = w / 2
        this.my = h / 2
        this.bigBody.src = './img/big.png'

    }
    draw() {
        this.x = lerD(mx, this.x, 0.95)
        this.y = lerD(my, this.y, 0.95)
        let dx = mx - this.x
        let dy = my - this.y
        this.angle = lerAngle(Math.atan2(-dy, -dx), this.angle, .2)
        this.timer += deltaTime
        if (this.timer > 50) {
            this.Count = (this.Count + 1) % 8
            this.timer %= 50
        }
        //eye animation
        this.eyeTimer += deltaTime
        if (this.eyeTimer > this.eyeInterval) {
            this.eyeCount = (this.eyeCount + 1) % 2
            this.eyeTimer %= this.eyeInterval
            if (this.eyeCount === 0) {
                this.eyeInterval = Math.random() * 2500 + 3000
            } else {
                this.eyeInterval = 200
            }
        }

        pen1.save()
        pen1.translate(this.x, this.y)
        pen1.rotate(this.angle)
        pen1.drawImage(momTail[this.Count], momTail[0].width / 2 + 12, momTail[0].height / 2 - 30)
        if (data.double == 1) {
            pen1.drawImage(momBodyOrange[this.bodyCount], -momBodyOrange[0].width / 2 + 14, -momBodyOrange[0].height / 2 + 13)

        } else {
            pen1.drawImage(momBodyBlue[this.bodyCount], -momBodyOrange[0].width / 2 + 14, -momBodyOrange[0].height / 2 + 15)

        }
        pen1.drawImage(momEye[this.eyeCount], momEye[0].width / 2, momEye[0].height / 2)

        pen1.restore()
    }
}