import { pen1, w, h, deltaTime } from './main'
export class Wave {
    constructor() {
        this.x = []
        this.y = []
        this.alive = []
        this.r = []
        this.num = 10
    }

    init() {
        for (var index = 0; index < this.num; index++) {
            this.alive[index] = false
            this.r[index] = 0

        }
    }
    draw() {
        pen1.save()

        pen1.shadowBlur = 10
        pen1.shadowColor = 'white'
        pen1.lineWidth = 3
        for (var index = 0; index < this.num; index++) {
            if (this.alive[index] == true) {

                this.r[index] = this.r[index] > 100 ? 100 : this.r[index] + deltaTime * .1
                pen1.strokeStyle = `rgba(255,255,255,${ 1-(this.r[index])/100})`
                if (this.r[index] >= 100) {
                    this.alive[index] = false
                    this.r[index] = 0
                    break
                }
                pen1.beginPath()
                pen1.arc(this.x[index], this.y[index], this.r[index], 0, 2 * Math.PI)
                pen1.stroke()
                pen1.closePath()

            }

        }
        pen1.restore()
    }
    born(x, y) {
        for (var index = 0; index < this.num; index++) {
            if (this.alive[index] == false) {
                this.alive[index] = true
                this.r[index] += 10
                this.y[index] = y
                this.x[index] = x
                    //console.log(x, y)
                return;
            }
        }
    }
}