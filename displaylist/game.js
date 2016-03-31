var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var humanContainer = new render.DisplayObjectContainer(); //定义humanContainer
var head = new render.Bitmap();
head.source = 'head.png';
var trunk = new render.Bitmap();
trunk.source = 'trunk.png';
var left_arm = new render.Bitmap();
left_arm.source = 'left_arm.png';
var right_arm = new render.Bitmap();
right_arm.source = 'right_arm.png';
var left_leg = new render.Bitmap();
left_leg.source = 'left_leg.png';
var right_leg = new render.Bitmap();
right_leg.source = 'right_leg.png';
humanContainer.addChild(head); //子部分
humanContainer.addChild(trunk);
humanContainer.addChild(left_arm);
humanContainer.addChild(right_arm);
humanContainer.addChild(left_leg);
humanContainer.addChild(right_leg);
head.x = 0;
head.y = -80;
trunk.x = 0; //中点
trunk.y = 0;
right_arm.x = 60;
right_arm.y = 5;
right_leg.x = 40;
right_leg.y = 100;
left_arm.x = -135;
left_arm.y = 5;
left_leg.x = -80;
left_leg.y = 100;
humanContainer.globalMatrix;
humanContainer.x = 100;
humanContainer.y = 100;
humanContainer.scaleX = 1;
humanContainer.scaleY = 1;
console.log(humanContainer.globalMatrix);
var renderCore = new render.RenderCore();
//renderCore.start(humanContainer, ["wander-icon.jpg"]);
renderCore.start(humanContainer, ['head.png', 'trunk.png', 'left_arm.png', 'right_arm.png', 'left_leg.png', 'right_leg.png']);
var HumanBody = (function (_super) {
    __extends(HumanBody, _super);
    function HumanBody() {
        _super.apply(this, arguments);
        this.vx = 4; //移动速度
        this.vr = 4; //旋转速度
    }
    HumanBody.prototype.onTicker = function (duringTime) {
        this.x += duringTime * this.vx;
        this.rotation += duringTime * this.vr;
    };
    return HumanBody;
}(Body));
var ticker = new Ticker();
var body = new HumanBody(humanContainer);
ticker.start([body]);
//# sourceMappingURL=game.js.map