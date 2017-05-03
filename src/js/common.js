export function lerD(aim, c, ratio) {
    let x = c - aim
    return aim + ratio * x
}
export function lerAngle(aim, c, ratio) {
    let d = aim - c
    if (d > Math.PI) {
        d = d - 2 * Math.PI
    }
    if (d < -Math.PI) {
        d = d + 2 * Math.PI
    }
    return c + ratio * d
}
export function calDis(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
}