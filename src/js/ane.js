 import { pen2, w, h, deltaTime } from './main'

 export class AneObj {
     constructor() {
         this.x = []
         this.len = []
         this.num = 40
     }
     init() {
         for (var index = 0; index < this.num; index++) {
             this.x[index] = index * 30 + Math.floor(Math.random() * 20)
             this.len[index] = 200 + Math.floor(Math.random() * 50)
         }
         //console.log(this.x, this.len)
     }
     draw() {
         pen2.save()
         pen2.strokeStyle = "#3b154e"
         pen2.lineWidth = 20
         pen2.lineCap = 'round'
         pen2.globalAlpha = 0.6
         for (var index = 0; index < this.num; index++) {
             pen2.beginPath()
             pen2.moveTo(this.x[index], h)
             pen2.lineTo(this.x[index], h - this.len[index])
             pen2.stroke()
             pen2.closePath()

         }
         pen2.restore()


     }


 }