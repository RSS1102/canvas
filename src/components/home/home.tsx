import { draw } from "@/components/home/index"
import { useEffect, useRef, useState } from "react"

export const Home = () => {
    useEffect(() => {
        const el = document.querySelector("canvas") as HTMLCanvasElement;
        const ctx = el!.getContext('2d') as CanvasRenderingContext2D;
        draw(el, ctx)
    }, [])
    return (
        <>
            <canvas id="canvas" width={1000} height={1000}></canvas>
        </>
    )
}