import { draw } from "@/components/home/img"
import { useEffect } from "react"
import './index.css'
export const Home = () => {
    useEffect(() => {
        const el = document.querySelector('canvas')
        const ctx = el!.getContext('2d', {
            willReadFrequently: true
        }) as CanvasRenderingContext2D;
        if (el) draw(el, ctx)
    })
    return (
        <div className="home">
            <canvas id="canvas"></canvas>
        </div>
    )
}
