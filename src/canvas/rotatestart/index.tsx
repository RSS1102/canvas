import { useEffect } from 'react'
import './index.css'
function RotateStart() {
    useEffect(() => {
        const random = (min: number, max: number) => {
            if (arguments.length < 2) {
                max = min
                min = 0
            } else if (min > max) {
                let v = min;
                min = max;
                max = v
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let canvas = document.querySelector("canvas")
        let ctx = canvas!.getContext('2d') as CanvasRenderingContext2D
        let w = canvas!.width = window.innerWidth
        let h = canvas!.height = window.innerHeight
        let stars: Array<any> = []
        let maxNum = 300

        let starCanvas = document.createElement('canvas')
        let starCtx = starCanvas.getContext('2d') as CanvasRenderingContext2D
        starCanvas.width = 100
        starCanvas.height = 100
        let r = 50
        let gradient2 = starCtx.createRadialGradient(r, r, 0, r, r, r)
        gradient2.addColorStop(0.025, '#fff')
        gradient2.addColorStop(0.15, 'hsl(211,61%,33%)')
        gradient2.addColorStop(0.15, 'hsl(211,61%,6%)')
        gradient2.addColorStop(1, 'transparent')
        starCtx.fillStyle = gradient2
        starCtx.arc(r, r, r, 0, Math.PI * 2)
        starCtx.fill()
        const maxOrbit = (x: number, y: number) => {
            let max = Math.max(x, y)
            let diameter = Math.round(Math.sqrt(max * max + max * max));
            return diameter / 2
        }
        class Star {
            orbitRadius = random(0, maxOrbit(w, h))
            radius = random(60, this.orbitRadius) / 6
            orbitX = w / 2
            orbitY = h / 2
            timePassed = (random(0, maxNum))
            speed = random(0, this.orbitRadius) / 50000
            alpha = random(2, 10) / 10
            constructor() {
                stars.push(this)
            };
            draw() {
                let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
                let y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
                let twinkle = random(0, 10)
                if (twinkle === 1 && this.alpha > 0) {
                    this.alpha -= 0.05
                } else if (twinkle === 2 && this.alpha < 1) {
                    this.alpha += 0.05
                }
                ctx.globalAlpha = this.alpha
                ctx.drawImage(starCanvas, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
                this.timePassed += this.speed

            }
        }
        for (let i = 0; i < maxNum; i++) {
            new Star()
        }
        function update() {
            ctx.globalCompositeOperation = 'source-over'
            ctx.fillStyle = '#060f19'
            ctx.fillRect(0, 0, w, h)
            ctx.globalCompositeOperation = 'lighter'
            for (let i = 0; i < stars.length; i++) {
                stars[i].draw()
            }
            window.requestAnimationFrame(update)
        }

        update()


    }, [])

    return (
        <div className="rotate-start">
            <canvas></canvas>
        </div>
    )
}

export default RotateStart