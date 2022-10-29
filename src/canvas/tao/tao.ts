const VITE__URL = import.meta.env.VITE__URL;
export const drawTao = (el: HTMLCanvasElement) => {
  // 屏幕宽高
  const ScreenWidth = document.documentElement.clientWidth;
  const ScreenHight = document.documentElement.clientHeight;
  // 重绘canvas大小
  el.setAttribute("width", ScreenWidth.toString());
  el.setAttribute("height", ScreenHight.toString());

  const ctx = el.getContext("2d") as CanvasRenderingContext2D;
  // ！！！这里要写上全路径
  const tao: string = VITE__URL + "/src/assets/tao1.png";
  let image: HTMLImageElement = new Image();
  image.src = tao;
  /**
   * @desc 构建一个方法供多次调用渲染
   * @desc 需要x,y随机生成花瓣
   * @desc 需要每秒下坠个随机距离(固定范围)
   * @desc 需要随机生成大小(固定范围)
   * @desc 花瓣需要一个每秒随机数翻转角度
   */
  function Tao(
    this: any,
    id: number,
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    rotate: number
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.rotate = rotate;
  }

  // 绘画
  Tao.prototype.draw = function () {
    this.ctx.drawImage(image, this.x, this.y, 15, 15);
  };

  let coordinates = 0;
  // 移动
  Tao.prototype.move = function () {
    this.y += 1.0;
    coordinates += 1;
    if (coordinates < 3) {
      this.x += -0.8;
    } else {
      this.x += 0.8;
      if (coordinates > 4) {
        coordinates = 0;
      }
    }
    if (this.y > ScreenWidth) {
      this.y = 0;
      this.x = Math.floor(Math.random() * ScreenWidth) + 100;
    }
    this.draw();
  };

  let taoArr: any = [];
  // 初始化
  const init = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < 120; i++) {
      taoArr[i] = new (Tao as any)(
        i,
        ctx,
        Math.floor(Math.random() * ScreenWidth),
        Math.floor(Math.random() * ScreenWidth),
        (30 * Math.PI) / 180
      );
      taoArr[i].draw();
    }
  };

  const animate = () => {
    // 不断清除画布内容再绘制,
    ctx.clearRect(0, 0, ScreenWidth, ScreenHight);
    for (var i in taoArr) {
      taoArr[i].move();
    }
    // 按帧对网页进行重绘
    requestAnimationFrame(animate);
  };
  init(ctx);
  animate();
};
