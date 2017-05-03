import { pen1, w, h, deltaTime } from './main'

export class Data {
    constructor() {
        this.fruitNum = 0
        this.double = 1
        this.score = 0
        this.gameOver = false
        this.opacity = 0
    }
    reset() {
        this.fruitNum = 0
        this.double = 1
    }
    updateScore() {
        this.score += this.fruitNum * 100 * this.double
        this.double = 1
        this.fruitNum = 0
            // console.log(this.score)
    }
    draw() {
        pen1.fillText(`score:${this.score}`, w * 0.5, h * 0.5 + 200)

        if (this.gameOver == true) {
            pen1.save()
            this.opacity = this.opacity > 1 ? 1 : this.opacity + deltaTime * 0.0005
            pen1.shadowBlur = 10
            pen1.shadowColor = 'white'

            pen1.fillStyle = `rgba(255,255,255,${this.opacity})`
            pen1.fillText(`Game Over`, w * 0.5, h * 0.5)
            pen1.restore()
        }
        //pen1.fillText(`num:${this.fruitNum}`, w * 0.5, h * 0.5 + 130)

    }
}