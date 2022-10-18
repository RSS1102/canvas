import { useEffect } from "react"
import { draw } from "./draw"
import "./index.css"
const RisingStars = () => {
    useEffect(() => {
        const canvas: any = document.getElementById("canvas");
        draw(canvas)
    }, [])

    return (
        <div>
            <div className="canvas-background"></div>
            <canvas id="canvas" width="0" height="0"></canvas>
        </div>
    )
}
export default RisingStars