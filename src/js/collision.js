import { fruit, mom, baby, wave, halo, data } from './main'
import { calDis } from './common'
export function momFruitsCollision() {
    if (data.gameOver == false) {
        for (let i = 0; i < fruit.num; i++) {
            if (fruit.alive[i] == true) {
                var l = calDis(fruit.x[i], fruit.y[i], mom.x, mom.y)

                if (l < 20) {
                    fruit.dead(i)
                    data.fruitNum++
                        mom.bodyCount++
                        if (mom.bodyCount >= 7)
                            mom.bodyCount = 7
                    if (fruit.fruitType[i] == 'blue') {
                        console.log(fruit.fruitType[i])
                        data.double = 2
                    }

                    wave.born(fruit.x[i], fruit.y[i])

                }
            }
        }
    }

}
export function momBabyCollision() {
    if (data.gameOver == false) {
        var l = calDis(mom.x, mom.y, baby.x, baby.y)
        if (l < 20 && data.fruitNum > 0) {
            halo.born(baby.x, baby.y)
            mom.bodyCount = 0
            baby.bodyCount = 0
                //data.reset()
            data.updateScore()


        }
    }


}