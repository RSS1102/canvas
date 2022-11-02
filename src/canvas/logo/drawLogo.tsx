const startAngle = 0
let speed = 0.01
let progress = Math.PI * 2 * speed
let tmpAngle = startAngle
const endAngle = Math.PI * 2

// 轨迹点的纵y横x坐标
let [x, y] = [10, 10]
// 轨迹点的数组
let options: number[][] = []
let t = 0

/**
 * @desc 三阶贝塞尔函数的坐标
 * @url https://blog.csdn.net/first_shun/article/details/107346329
 * @url https://segmentfault.com/a/1190000008219430?utm_source=sf-similar-article
 * B^(n,j)(t)=(n,i)t^i(1-t)^(n-i)
 */
const threeBezier = (x1: number, y1: number, x2: number, y2: number, cx1: number, cy1: number, cx2: number, cy2: number) => {
    let x =
        x1 * (1 - t) * (1 - t) * (1 - t) +
        3 * cx1 * t * (1 - t) * (1 - t) +
        3 * cx2 * t * t * (1 - t) +
        x2 * t * t * t;
    let y =
        y1 * (1 - t) * (1 - t) * (1 - t) +
        3 * cy1 * t * (1 - t) * (1 - t) +
        3 * cy2 * t * t * (1 - t) +
        y2 * t * t * t;
    return [x, y];
}
/**
 * @desc 画边框
 */
const frame = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(300, 0)
    ctx.moveTo(300, 0)
    ctx.lineTo(300, 300)
    ctx.moveTo(300, 300)
    ctx.lineTo(0, 300)
    ctx.moveTo(0, 300)
    ctx.lineTo(0, 0)
    ctx.stroke()
}

/**
 * @desc 画圆
 * @param ctx dom
 */
const drawCircular = (ctx: CanvasRenderingContext2D) => {
    const x = 150
    const y = 150
    const r = 150
    if (endAngle < tmpAngle) {
        return
    } else {
        tmpAngle += progress
    }
    ctx.beginPath()
    ctx.arc(x, y, r, startAngle, tmpAngle);
    ctx.stroke()
    ctx.closePath()

}
const drawR = (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, cx1: number, cy1: number, cx2: number, cy2: number) => {
    if (t >= 1) return
    //计算路径点：
    [x, y] = threeBezier(x1, y1, x2, y2, cx1, cy1, cx2, cy2)
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
    t += speed
}

/**
 * @desc 绘画
 * @param ctx dom
 * @param timer 速度
 */
export const drawLogo = (ctx: CanvasRenderingContext2D, timer: number) => {
    const draw = () => {
        // 起点
        let [x1, y1] = [10, 10]
        // 控制点
        let [cx1, cy1] = [200, 50]
        let [cx2, cy2] = [200, 50]
        // 终点
        let [x2, y2] = [200, 200]

        if (t <= 1) {
            drawR(ctx, x1, y1, x2, y2, cx1, cy1, cx2, cy2)
            drawCircular(ctx)
            frame(ctx)
        }

        requestAnimationFrame(draw)
    }
    draw()
}