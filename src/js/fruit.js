import { pen1, w, deltaTime, ane } from './main'
export class Fruit {
    constructor() {
        this.num = 20
        this.alive = []
        this.fruit = new Image()
        this.x = []
        this.y = []
        this.l = []
        this.id = []
        this.spd = []
        this.fruitType = []
        this.init()
    }
    init() {
        for (let i = 0; i < this.num; i++) {
            this.alive[i] = false
            this.x[i] = 0
            this.y[i] = 0
            this.l[i] = 0
            this.spd[i] = Math.random() * 0.017 + 0.002
            this.fruitType[i] = ''
            this.id[i] = 0
            this.born(i)
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
                    this.x[i] = ane.headx[this.id[i]]
                    this.y[i] = ane.heady[this.id[i]]
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
    dead(i) {
        this.alive[i] = false;
    }
    born(i) {
        this.id[i] = Math.floor(Math.random() * ane.num)
        this.x[i] = ane.x[this.id[i]]
        this.y[i] = ane.heady[this.id[i]]
        this.l[i] = 0
        this.alive[i] = true
        let ran = Math.random()
        if (ran < 0.2)
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
            this.sendFruit()

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