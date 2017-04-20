import { c1, c2, pen1, pen2, w, h, lastTime, deltaTime, ane } from './main'
export class Fruit {
    constructor() {
        this.num = 30
        this.alive = []
        this.fruit = new Image()

        this.x = []
        this.y = []
        this.l = []
        this.spd = []
        this.fruitType = []
    }
    init() {
        for (let i = 0; i < this.num; i++) {
            this.alive[i] = false
            this.x[i] = 0
            this.y[i] = 0
            this.l[i] = 0
            this.spd[i] = Math.random() * 0.017 + 0.002
            this.fruitType[i] = ''
            this.born(ane, h, i)
        }

    }
    draw() {
        //console.log(this.fruitType)

        for (var i = 0; i < this.num; i++) {
            if (this.alive[i] === true) {
                if (this.fruitType[i] == 'orange') {
                    this.fruit.src = './img/fruit.png'

                } else {
                    this.fruit.src = './img/blue.png'
                }

                if (this.l[i] <= 14) {
                    this.l[i] += this.spd[i] * deltaTime

                } else {
                    this.y[i] -= this.spd[i] * 4 * deltaTime
                }

                //  console.log(this.l[i])
                pen1.drawImage(this.fruit, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i])
                if (this.y[i] < 10)
                    this.alive[i] = false

            }
            //}
        }
        this.fruitMonitor()


    }
    update() {
        var num = 0
        for (var index = 0; index < this.num; index++) {

            if (this.alive[index])
                num++
        }
    }
    born(i) {
        var aneId = Math.floor(Math.random() * ane.num)
        this.x[i] = ane.x[aneId]
        this.y[i] = h - ane.len[aneId]
        this.l[i] = 0
        this.alive[i] = true
        var ran = Math.random()
        if (ran < 0.3)
            this.fruitType[i] = 'blue'
        else
            this.fruitType[i] = 'orange'
    }
    fruitMonitor() {
        let num = 0
        for (var index = 0; index < this.num; index++) {
            if (this.alive[index])
                num++

        }
        if (num < 15) {
            this.sendFruit(ane, h, index)

        }
    }
    sendFruit() {
        for (var index = 0; index < this.num; index++) {
            if (!this.alive[index]) {
                this.born(index)
            }

        }
    }
}