/**
 * 基类，负责处理x,y,rotation 等属性
 */ 
class DisplayObject {

    x = 0;

    y = 0;

    rotation = 0;

    draw(context: CanvasRenderingContext2D) {
        context.save();
        context.rotate(this.rotation);
        context.translate(this.x, this.y);
        this.render(context);

        context.restore();
    }

    render(context: CanvasRenderingContext2D) {

    }

}

class Bitmap extends DisplayObject {


    source;

    render(context: CanvasRenderingContext2D) {

        var image = imagePool[this.source];
        if (image) {
            context.drawImage(image, 0, 0);
        }
        else {
            context.font = "20px Arial";
            context.fillStyle = '#000000';
            context.fillText('错误的URL', 0, 20);
        }
    }

}

class Rect extends DisplayObject {

    width = 100

    height = 100;

    color = '#FF0000';

    render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.width, this.height);
    }
}

class TextField extends DisplayObject {

    render(context: CanvasRenderingContext2D) {
        context.font = "20px Arial";
        context.fillStyle = '#000000';
        context.fillText('SSE_13081117 第二次作业', 0, 20);
    }
}

function drawQueue(queue) {
    for (var i = 0; i < renderQueue.length; i++) {
        var displayObject: DisplayObject = renderQueue[i];
        displayObject.draw(context);
    }
}

var imagePool = {};

function loadResource(imageList, callback) {
    var count = 0;
    imageList.forEach(function(imageUrl) {
        var image = new Image();
        image.src = imageUrl;
        image.onload = onLoadComplete;
        image.onerror = onLoadError;

        function onLoadComplete() {
            imagePool[imageUrl] = image;
            count++;
            if (count == imageList.length) {
                callback();
            }
        }
        
        function onLoadError(){
            alert('资源加载失败:' + imageUrl);
        }
    })
}


var canvas: HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;
var context = canvas.getContext("2d");


var rect = new Rect();
rect.width = 200;
rect.height = 300;
rect.color = '#00FF00'


var rect2 = new Rect();
rect2.width = 300;
rect2.height = 50;
rect2.x = 200;
rect2.y = 200;
rect2.rotation = Math.PI / 8;
rect2.color = '#00FFFF'

var text = new TextField();
text.x = 250;
text.y = 310;
context.fillText('SSE_13081117 第二次作业', 0, 20);


var bitmap1 = new Bitmap();
bitmap1.source = 'BG_01.png';
bitmap1.x =0;
bitmap1.y = 0;

var bitmap2 = new Bitmap();
bitmap2.source = 'BG_02.png';
bitmap2.x =0;
bitmap2.y = 215;

var bitmap3 = new Bitmap();
bitmap3.source = 'CZ_01.png';
bitmap3.x =350;
bitmap3.y = 5;

var bitmap4 = new Bitmap();
bitmap4.source = 'CZ_02.png';
bitmap4.x =0;
bitmap4.y = 0;

var bitmap5 = new Bitmap();
bitmap5.source = 'renwu_01.png';
bitmap5.x =180;
bitmap5.y = 110;

var bitmap6 = new Bitmap();
bitmap6.source = 'renwu_02.png';
bitmap6.x =120;
bitmap6.y = 220;

var bitmap7 = new Bitmap();
bitmap7.source = 'renwu_03.png';
bitmap7.x =80;
bitmap7.y = 220;


//渲染队列
var renderQueue = [bitmap1,bitmap2,bitmap3,bitmap4,bitmap5,bitmap6,
bitmap7,text];
//资源加载列表
var imageList = ['BG_01.png','BG_02.png','CZ_01.png','CZ_02.png','renwu_01.png',
'renwu_02.png','renwu_03.png'];

//先加载资源，加载成功之后执行渲染队列
loadResource(imageList, function() {
    drawQueue(renderQueue);
})


