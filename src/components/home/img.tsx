const VITE__URL = import.meta.env.VITE__URL;
export const draw = (el: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const image: HTMLImageElement = new Image();
    image.src = VITE__URL + '/src/assets/avatar.png';
    image.crossOrigin = ''
    // 要在image.onload之后调用，要不然第一次进入页面图片加载不正确
    image.onload = function () {
        const imageWidth = image.width;
        const imagehHeight = image.height;
        // 重绘canvas
        el.setAttribute("width", imageWidth.toString());
        el.setAttribute("height", imagehHeight.toString());
        // 画图
        ctx.drawImage(image, 0, 0)
        // 拿到图片的资源
        const imgData = ctx.getImageData(0, 0, imageWidth, imagehHeight)
        // 重新绘制
        ctx.clearRect(0, 0, imageWidth, imagehHeight)
        // 像素点间隔
        const leap = 3
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.strokeStyle = '#000000'
        ctx.lineTo(imageWidth, 0)
        ctx.lineTo(imageWidth, imagehHeight)
        ctx.lineTo(0, imagehHeight)
        ctx.closePath();
        ctx.stroke();

        for (let y = 0; y < imagehHeight; y += leap) {
            for (let x = 0; x < imageWidth; x += leap) {
                let index = x + y * imageWidth;
                let r = imgData.data[index * 4 + 1];
                let g = imgData.data[index * 4 + 2];
                let b = imgData.data[index * 4 + 3];
                let a = imgData.data[index * 4 + 4];
                if (a < 220) {
                    ctx.beginPath();
                    // ctx.strokeStyle = `rgba(${r},${g},${b},${a})`
                    ctx.arc(x, y, 0.8, 0, Math.PI * 2)
                    ctx.closePath();
                    ctx.fillStyle = '#000000';//设置填充颜色
                    ctx.fill();//开始填充
                }

            }
        }
    }
}