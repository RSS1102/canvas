import { useEffect } from "react";
import { drawLogo } from './drawLogo'
import "~/style/center.css"
const Logo = () => {
  useEffect(() => {
    const el = document.querySelector('canvas')
    if (el) {
      const ctx = el.getContext('2d')
      if (ctx) drawLogo(ctx, 3)
    }

  })
  return (
    <div className="center">
      <canvas width={300} height={300}></canvas>
    </div>
  )
};
export default Logo