import { c1, c2, pen1, babyEyeArray, data, babyBodyArray, babyTailArray, mx, my, pen2, w, mom, h, lastTime, deltaTime, ane } from './main'
import { lerD, lerAngle } from './common'
export class BabyFish {
    constructor() {
        this.x
        this.y
        this.angle = 0
        this.timer = 0
        this.Count = 0
        this.eyeTimer = 0
        this.eyeCount = 0
        this.eyeInterval = 5000
        this.bodyTimer = 0
        this.bodyCount = 0
        this.init()
    }
    init() {
        this.x = w / 2 - 190
        this.y = h / 2


    }
    draw() {

        this.x = lerD(mom.x, this.x, 0.98)
        this.y = lerD(mom.y, this.y, 0.98)
        let dx = mom.x - this.x
        let dy = mom.y - this.y
        this.angle = lerAngle(Math.atan2(-dy, -dx), this.angle, .1)
        this.timer += deltaTime
        if (this.timer > 50) {
            this.Count = (this.Count + 1) % 8
            this.timer %= 50
        }
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
        //body animation
        this.bodyTimer += deltaTime
        if (this.bodyTimer > 300) {
            this.bodyCount++
                this.bodyTimer %= 300
            if (this.bodyCount > 19) {
                this.bodyCount = 19
                data.gameOver = true
            }
        }
        pen1.save()
        pen1.translate(this.x, this.y)
        pen1.rotate(this.angle)
        pen1.drawImage(babyTailArray[this.Count], -babyTailArray[0].width / 2, -babyTailArray[0].height / 2)
        pen1.drawImage(babyBodyArray[this.bodyCount], -babyBodyArray[0].width / 2 - 25, -babyBodyArray[0].height / 2)
        pen1.drawImage(babyEyeArray[this.eyeCount], -babyEyeArray[0].width / 2 - 25, -babyEyeArray[0].height / 2)
        pen1.restore()
    }
}