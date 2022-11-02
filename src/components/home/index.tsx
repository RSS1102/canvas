import { draw } from "@/components/home/img"
import { useEffect, useState } from "react"
import './index.css'
import { UpLoad } from "./upload"
export const Home = () => {
    const [imgDate, setimgDate] = useState<string>()
    const getImgDate = (val: string) => {
        setimgDate(val)
    }

    useEffect(() => {
        const el = document.querySelector('canvas')
        const ctx = el!.getContext('2d', {
            willReadFrequently: true
        }) as CanvasRenderingContext2D;
        const imgDom = document.querySelector('img') as HTMLImageElement
        if (el) draw(el, ctx, imgDom)
    }, [imgDate])
    return (
        <div className="center" >
            <UpLoad getImgDate={getImgDate}></UpLoad>
            <img src={imgDate} />
            <canvas></canvas>
        </div>
    )
}
