/*var humanContainer = new render.DisplayObjectContainer();
var head = new render.Bitmap();
head.x = 100;
head.source = "wander-icon.jpg";
humanContainer.addChild(head);


var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["wander-icon.jpg"]);

class HumanBody extends Body {
    
    
    vx:number = 5;
    

    onTicker(duringTime: number) {
        this.x = 100;//+= duringTime * this.vx;
        this.y = 100;

    }
}*/
//module game {
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//}
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
var eventCore = new events.EventCore();
eventCore.init();
var headHitTest = function (localPoint, displayObject) {
    alert("\u70B9\u51FB\u4F4D\u7F6E\u4E3A" + localPoint.x + "," + localPoint.y);
    return true;
};
var headOnClick = function () {
    alert("clicked!!");
    //修改 HumanBody 的速度，使其反向移动
};
eventCore.register(head, headHitTest, headOnClick);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQUNILGVBQWU7Ozs7OztBQUdmLEdBQUc7QUFHSCxJQUFJLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUEsa0JBQWtCO0FBRTNFLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0FBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hDLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBQzNCLElBQUksUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25DLFFBQVEsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO0FBQ2pDLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO0FBQ25DLElBQUksUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25DLFFBQVEsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO0FBQ2pDLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO0FBRW5DLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQSxLQUFLO0FBQ2xDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDOUIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUNqQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ2xDLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDakMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUVsQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDYixLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLElBQUk7QUFDaEIsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWixTQUFTLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQztBQUNmLFNBQVMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0FBQ2QsU0FBUyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUM7QUFDZixTQUFTLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQztBQUNoQixRQUFRLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBRyxDQUFDO0FBQ2hCLFFBQVEsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0FBQ2IsUUFBUSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNmLFFBQVEsQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDO0FBRWYsY0FBYyxDQUFDLFlBQVksQ0FBQTtBQUMzQixjQUFjLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQztBQUNyQixjQUFjLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQztBQUNyQixjQUFjLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztBQUN4QixjQUFjLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztBQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV6QyxJQUFJLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN6Qyx3REFBd0Q7QUFDeEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLGNBQWMsRUFBQyxlQUFlLEVBQUMsY0FBYyxFQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFHekg7SUFBd0IsNkJBQUk7SUFBNUI7UUFBd0IsOEJBQUk7UUFFeEIsT0FBRSxHQUFDLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDWCxPQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUEsTUFBTTtJQVFmLENBQUM7SUFORyw0QkFBUSxHQUFSLFVBQVMsVUFBa0I7UUFFdkIsSUFBSSxDQUFDLENBQUMsSUFBRSxVQUFVLEdBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxJQUFHLFVBQVUsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBRXZDLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUFYRCxDQUF3QixJQUFJLEdBVzNCO0FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN6QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUdyQixJQUFJLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN2QyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFakIsSUFBSSxXQUFXLEdBQUcsVUFBQyxVQUFxQixFQUFDLGFBQWtDO0lBQ3ZFLEtBQUssQ0FBRSxtQ0FBUSxVQUFVLENBQUMsQ0FBQyxTQUFJLFVBQVUsQ0FBQyxDQUFHLENBQUMsQ0FBQztJQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQTtBQUVELElBQUksV0FBVyxHQUFHO0lBQ2QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25CLHlCQUF5QjtBQUM3QixDQUFDLENBQUE7QUFFRCxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsV0FBVyxDQUFDLENBQUMifQ==