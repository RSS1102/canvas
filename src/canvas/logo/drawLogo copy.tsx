const startAngle = 0
let progress = Math.PI / 180
let tmpAngle = startAngle
const endAngle = Math.PI * 2
/**
 * @desc 画圆
 * @param ctx dom
 */
const drawCircular = (ctx: CanvasRenderingContext2D) => {
    const x = 100
    const y = 100
    const r = 100
    if (endAngle <= tmpAngle) {
        return
    } else {
        ctx.clearRect(0, 0, 300, 300)
        tmpAngle += progress
    }
    ctx.beginPath()
    ctx.arc(x, y, r, startAngle, tmpAngle);
    ctx.stroke()
    ctx.closePath()

}
let [x, y] = [10, 10]
// 起点
let [x1, y1] = [10, 10]
// 控制点
let [cx, cy] = [200, 50]
// 终点
let [x2, y2] = [200, 200]
let options: number[][] = []
let t = 0
const quadraticCurve = () => {
    x = Math.pow(1 - t, 2) * x1 + 2 * t * (1 - t) * cx + Math.pow(t, 2) * x2
    y = Math.pow(1 - t, 2) * y1 + 2 * t * (1 - t) * cy + Math.pow(t, 2) * y2
}
/**
 * @desc R
 * @param ctx 
 */
const drawR = (ctx: CanvasRenderingContext2D) => {
    quadraticCurve()
    options.push([x, y])
    ctx.beginPath()
    options.map((e, i) => {
        ctx.clearRect(0, 0, 300, 300)
        if (i - 1 > 0) {
            // 避免i=0
            ctx.moveTo(options[i - 1][0], options[i - 1][1])
        }
        ctx.lineTo(e[0], e[1])
        ctx.stroke();
    })
    console.log(options)
    t += 0.01
}

/**
 * @desc 绘画
 * @param ctx dom
 * @param timer 速度
 */
export const drawLogo = (ctx: CanvasRenderingContext2D, timer: number) => {
    const draw = () => {
        if (t <= 1) {
            drawR(ctx)
        }
        // drawCircular(ctx)
        requestAnimationFrame(draw)
    }
    draw()
}