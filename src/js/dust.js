import { pen1, w, h, deltaTime, dustPic } from './main'
export class Dust {
    constructor() {
        this.x = []
        this.y = []
        this.amp = []
        this.num = 30
        this.alpha = 0
        this.id = []
        this.init()
    }

    init() {
        for (var index = 0; index < this.num; index++) {
            this.x[index] = Math.random() * w
            this.y[index] = Math.random() * h
            this.amp[index] = 20 + Math.random() * 26
            this.id[index] = Math.floor(Math.random() * 7)

        }
    }
    draw() {
        pen1.save()
        this.alpha = this.alpha > 10000 ? 0 : this.alpha + deltaTime / 600

        //console.log(this.alpha)
        for (var index = 0; index < this.num; index++) {
            // console.log(dustPic[this.id[index]])
            pen1.drawImage(dustPic[this.id[index]], this.x[index] + Math.sin(this.alpha) * this.amp[index], this.y[index])


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