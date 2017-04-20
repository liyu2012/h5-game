import { pen2, pen1, w, h, bg } from './main'

export function background() {
    bg.onload = () => {

        pen2.drawImage(bg, 0, 0, w, h)
    }





}