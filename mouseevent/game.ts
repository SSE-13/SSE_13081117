
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


//}


var humanContainer = new render.DisplayObjectContainer();//定义humanContainer

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

humanContainer.addChild(head)//子部分
humanContainer.addChild(trunk)
humanContainer.addChild(left_arm)
humanContainer.addChild(right_arm)
humanContainer.addChild(left_leg)
humanContainer.addChild(right_leg)

head.x = 0;
head.y = -80;
trunk.x = 0;//中点
trunk.y = 0;
right_arm.x=60;
right_arm.y=5;
right_leg.x=40;
right_leg.y=100;
left_arm.x=-135;
left_arm.y=5;
left_leg.x=-80;
left_leg.y=100;

humanContainer.globalMatrix
humanContainer.x=100;
humanContainer.y=100;
humanContainer.scaleX=1;
humanContainer.scaleY=1;

console.log(humanContainer.globalMatrix);

var renderCore = new render.RenderCore();
//renderCore.start(humanContainer, ["wander-icon.jpg"]);
renderCore.start(humanContainer, ['head.png','trunk.png','left_arm.png','right_arm.png','left_leg.png','right_leg.png']);


class HumanBody extends Body {
    
    vx=4;//移动速度
    vr=4;//旋转速度
    
    onTicker(duringTime: number) {
        
        this.x+=duringTime*this.vx;
        this.rotation +=duringTime*this.vr;
         
    }
}

var ticker = new Ticker();
var body = new HumanBody(humanContainer);
ticker.start([body]);


var eventCore = new events.EventCore();
eventCore.init();

var headHitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
    //alert (`点击位置为${localPoint.x},${localPoint.y}`);
    //return true;
    var headClicked = false;
    if(localPoint.x>0 &&localPoint.x<100 && localPoint.y>0 && localPoint.y<100){
         headClicked=true;
    }
    return headClicked;
}

var ax;
var ay;
var headOnClick = () => {
    alert("clicked!!");
    //修改 HumanBody 的速度，使其反向移动
    if(headHitTest){
         if(body.vx==0){
            body.vx=ax;
            body.vr=ay;
        }else{
            body.vx*=-1;
            body.vr*=-1;
    }
}
}

eventCore.register(head,headHitTest,headOnClick);










