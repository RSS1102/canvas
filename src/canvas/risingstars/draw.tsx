export const draw = (canvas: { getContext: (arg0: string) => any; setAttribute: (arg0: string, arg1: string) => void; }) => {
    // 构造星星
    function Star(this: any, id: number, x: number, y: number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = Math.floor(Math.random() * 2) + 1;
        // 透明度
        let alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
        this.color = "rgba(255,255,255," + alpha + ")";
    }

    Star.prototype.draw = function () {
        // 图形颜色
        ctx.fillStyle = this.color;
        // 定阴影的模糊程度 默认值是0，表示不模糊
        ctx.shadowBlur = this.r * 2;
        // 开始
        ctx.beginPath();
        // 画圆
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        // 结束
        ctx.closePath();
        // 填充当前的图像（路径）
        ctx.fill();
    };

    Star.prototype.move = function () {
        // y每次减少0.15
        this.y -= 0.15;
        this.y < 0 ? (this.y = HEIGHT) : "";
        this.draw();
    };

    // 开始绘画
    // <canvas>的绘制上下文。 <HTMLCanvasElement>
    // 获取页面canvas
    // const canvas: any = document.getElementById("canvas");
    // 获得渲染上下文和它的绘画功能。getContext()只有一个参数，上下文的格式。
    const ctx = canvas.getContext("2d");

    // 星星数组
    let stars: any = [];
    // 初始星星的数量
    let initStarsPopulation = 100;
    /**
     *  可见区域宽度
     *  可见区域高度
     */
    let WIDTH: number = document.documentElement.clientWidth;
    let HEIGHT: number = document.documentElement.clientHeight;
    // setAttribute 创建或改变某个新属性。
    canvas.setAttribute("width", WIDTH.toString());
    canvas.setAttribute("height", HEIGHT.toString());


    function init() {
        //  strokeStyle 用来设置描边的样式
        //  shadowColor 阴影的颜色
        ctx.strokeStyle = "white";
        ctx.shadowColor = "white";

        for (var i = 0; i < initStarsPopulation; i++) {
            /**
             * Math.floor 返回小于或等于指定数字的最大整数值。
             *  Math.random() 取得0到1之间的随机小数
             * 创建星星（id，x，y，r，color)
             * 分别画星星
             * */
            stars[i] = new (Star as any)(
                i,
                Math.floor(Math.random() * WIDTH),
                Math.floor(Math.random() * HEIGHT)
            );
            stars[i].draw();
        }
        // 定阴影的模糊程度 默认值是0，表示不模糊
        ctx.shadowBlur = 0;
        animate();
    }
    init();
    function animate() {
        // clearRect 不断清除画布内容再绘制，形成动画效果
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        for (var i in stars) {
            stars[i].move();
        }
        // 按帧对网页进行重绘
        window.requestAnimationFrame(animate);
    }
}
