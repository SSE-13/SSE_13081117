/*const GRAVITY = 9.8;

const BOUNDS_BOTTOM = 400;

const BOUNDS_LEFT = 0;

const BOUNDS_RIGHT = 400;

const BOUNCE = 0.95;*/
/**
 * 计时器系统
 */
class Ticker {

    bodyQueue = [];

    lastTime;

    /**
     * 启动计时器
     * @param bodyList 物理队列
     */
    start(bodyQueue) {
        this.bodyQueue = bodyQueue;
        this.lastTime = Date.now();
        var self = this;
        setInterval(this.onTicker.bind(this), 1000 / 60);
    }

    onTicker() {
        var currentTime = Date.now();
        var duringTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        this.bodyQueue.map(function(body) {
            body.onTicker(duringTime / 100);
            body.updateDisplayObject();
        });
    }
}


class Body {

    vx = 0;
    vy = 0;
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    rotation = 0;
    scaleX = 1;
    scaleY = 1;

    displayObject;

    constructor(displayObject: render.DisplayObject) {
        this.displayObject = displayObject;
        this.x = displayObject.x;
        this.y = displayObject.y;
        this.rotation = displayObject.rotation;
        this.scaleX = displayObject.scaleX;
        this.scaleY = displayObject.scaleY;
    }

    public onTicker(duringTime) {
        /*this.vy += duringTime * GRAVITY;
        this.x += duringTime * this.vx;
        this.y += duringTime * this.vy;

        //反弹
        if (this.y + this.height > BOUNDS_BOTTOM) {
            this.vy = -BOUNCE * this.vy;
        }

        //TODO： 左右越界反弹
        if (this.x + this.width > BOUNDS_RIGHT) {
            this.vx = -BOUNCE * this.vx;
        }    
        if (this.x  < BOUNDS_LEFT) {
            this.vx = -BOUNCE * this.vx;
        }*/
    }
    
    public updateDisplayObject(){
          //根据物体位置更新显示对象属性
        var displayObject:render.DisplayObject = this.displayObject;
        displayObject.x = this.x;
        displayObject.y = this.y;
        displayObject.rotation = this.rotation;
        displayObject.scaleX = this.scaleX;
        displayObject.scaleY = this.scaleY;
    }
    
}
