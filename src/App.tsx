import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  useEffect(() => {

    const random = (min, max) => {
      if (arguments.length < 2) {
        max = min
      } else if (min > max) {
        let v = min;
        min = max;
        max = v
      }
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let canvas = document.querySelector("canvas")
    let ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    let stars = []
    let maxNum = 800
    let starCanvas = document.createElement('canvas')
    let starCtx = starCanvas.getContext('2d')
    starCanvas.width = 100
    starCanvas.height = 100
    let r = 50
    let gradient2 = starCtx.createConicGradient(r, r, 0, r, r, r)
    gradient2.addColorStop(0.025, '#fff')
    gradient2.addColorStop(0.15, 'hsl(211,61%,33%)')
    gradient2.addColorStop(0.15, 'hsl(211,61%,6%)')
    gradient2.addColorStop(1, 'transparent')
    starCtx.fillStyle = gradient2
    starCtx.beginPath()
    starCtx.fill()
    // ctx.drawImage(starCanvas, 100, 100, 50, 50)
    const maxOrbit = (x, y) => {
      let max = Math.max(x, y)
      diameter = Math.round(Math.sqrt(max * max + max * max))
      return diameter / 2
    }
    let Star = function () {
      this.orbitRadius = random(maxOrbit(w, h))
      this.radius = random(60, this.orbitRadius) / 12
      this.orbitX = w / 2
      this.orbitY = h / 2
      this.timePassed = (random(0, maxNum))
      this.speed = random(this.orbitRadius) / 50000
      this.alpha = random(2, 10) / 10
      stars.push(this)
    }
    Star.prototype.draw = function () {
      let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
      let y = Math.sin(this.timePassed) * this.orbitRadius + this.orbitY
      let twinkle = random(10)
      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05
      }
      ctx.globalAlpha = this.alpha
      ctx.drawImage(starCanvas, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
      this.timePassed += this.speed
      for (let i = 0; i < maxNum; i++) {
        new Star()
      }

      function update() {
        ctx.globalCompositeOperation = 'source-over'
        ctx.globalAlpha = 0.8
        ctx.fillStyle = '#060f19'
        ctx.fillRect(0, 0, w, h)
        ctx.globalCompositeOperation = 'lighter'
        for (let i = 0; i < stars.length; i++) {
          stars[i].draw()
        }
        window.requestAnimationFrame(update)
      }
      update()
    }

  }, [])


  return (
    <div className="App">
      <canvas id='canvas'></canvas>
    </div>
  )
}

export default App
