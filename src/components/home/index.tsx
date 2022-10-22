export const draw = (el: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    // 进行抬笔、落笔判断
    let isDrawing = false
    // 鼠标落下 获取起始坐标
    el.onmousedown = function (e) {
        isDrawing = true;
        ctx.moveTo(e.clientX, e.clientY);
    };
    // 鼠标移动 开始划线
    el.onmousemove = function (e) {
        if (isDrawing) {
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
        }
    };
    //鼠标抬起 结束划线
    el.onmouseup = function () {
        isDrawing = false;
    };
}