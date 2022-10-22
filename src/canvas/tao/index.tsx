import { useEffect } from 'react'
import './index.css'
import { drawTao } from './tao'
const Tao = () => {
    useEffect(() => {
        const el = document.querySelector('canvas')
        if (el) drawTao(el)

    }, [])
    return (
        <div className="tao">
            <canvas></canvas>
        </div>
    )
}

export default Tao