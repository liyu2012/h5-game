 import { pen2, w, h, deltaTime } from './main'

 export class AneObj {
     constructor() {
         this.x = []
         this.len = []
         this.num = 40
         this.heady = []
         this.headx = []
         this.time = 0
         this.amp = []
         this.init()
     }
     init() {
         for (var index = 0; index < this.num; index++) {
             this.x[index] = index * 30 + Math.floor(Math.random() * 20)
             this.len[index] = 200 + Math.floor(Math.random() * 50)

             this.heady[index] = h - this.len[index]
             this.amp[index] = Math.random() * 100 + 50
         }
         //console.log(this.x, this.len)
     }
     draw() {
         pen2.save()
         pen2.strokeStyle = "#3b154e"
         pen2.lineWidth = 20
         pen2.lineCap = 'round'
         pen2.globalAlpha = 0.6
         this.time = this.time > 10000 ? 0 : this.time + deltaTime / 600

         for (var index = 0; index < this.num; index++) {
             pen2.beginPath()
             pen2.moveTo(this.x[index], h)
             this.headx[index] = this.x[index] + Math.sin(this.time) * this.amp[index]
             pen2.quadraticCurveTo(this.x[index] + 30, this.heady[index] + 100, this.headx[index], this.heady[index])
                 // pen2.lineTo(this.x[index], h - this.len[index])

             pen2.stroke()


         }
         pen2.restore()


     }


 }