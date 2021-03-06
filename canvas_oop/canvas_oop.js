var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 基类，负责处理x,y,rotation 等属性
 */
var DisplayObject = (function () {
    function DisplayObject() {
        this.x = 0;
        this.y = 0;
        this.rotation = 0;
    }
    DisplayObject.prototype.draw = function (context) {
        context.save();
        context.rotate(this.rotation);
        context.translate(this.x, this.y);
        this.render(context);
        context.restore();
    };
    DisplayObject.prototype.render = function (context) {
    };
    return DisplayObject;
}());
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        _super.apply(this, arguments);
    }
    Bitmap.prototype.render = function (context) {
        var image = imagePool[this.source];
        if (image) {
            context.drawImage(image, 0, 0);
        }
        else {
            context.font = "20px Arial";
            context.fillStyle = '#000000';
            context.fillText('错误的URL', 0, 20);
        }
    };
    return Bitmap;
}(DisplayObject));
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        _super.apply(this, arguments);
        this.width = 100;
        this.height = 100;
        this.color = '#FF0000';
    }
    Rect.prototype.render = function (context) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.width, this.height);
    };
    return Rect;
}(DisplayObject));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        _super.apply(this, arguments);
    }
    TextField.prototype.render = function (context) {
        context.font = "20px Arial";
        context.fillStyle = '#000000';
        context.fillText('SSE_13081117 第二次作业', 0, 20);
    };
    return TextField;
}(DisplayObject));
function drawQueue(queue) {
    for (var i = 0; i < renderQueue.length; i++) {
        var displayObject = renderQueue[i];
        displayObject.draw(context);
    }
}
var imagePool = {};
function loadResource(imageList, callback) {
    var count = 0;
    imageList.forEach(function (imageUrl) {
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
        function onLoadError() {
            alert('资源加载失败:' + imageUrl);
        }
    });
}
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var rect = new Rect();
rect.width = 200;
rect.height = 300;
rect.color = '#00FF00';
var rect2 = new Rect();
rect2.width = 300;
rect2.height = 50;
rect2.x = 200;
rect2.y = 200;
rect2.rotation = Math.PI / 8;
rect2.color = '#00FFFF';
var text = new TextField();
text.x = 250;
text.y = 310;
context.fillText('SSE_13081117 第二次作业', 0, 20);
var bitmap1 = new Bitmap();
bitmap1.source = 'BG_01.png';
bitmap1.x = 0;
bitmap1.y = 0;
var bitmap2 = new Bitmap();
bitmap2.source = 'BG_02.png';
bitmap2.x = 0;
bitmap2.y = 215;
var bitmap3 = new Bitmap();
bitmap3.source = 'CZ_01.png';
bitmap3.x = 350;
bitmap3.y = 5;
var bitmap4 = new Bitmap();
bitmap4.source = 'CZ_02.png';
bitmap4.x = 0;
bitmap4.y = 0;
var bitmap5 = new Bitmap();
bitmap5.source = 'renwu_01.png';
bitmap5.x = 180;
bitmap5.y = 110;
var bitmap6 = new Bitmap();
bitmap6.source = 'renwu_02.png';
bitmap6.x = 120;
bitmap6.y = 220;
var bitmap7 = new Bitmap();
bitmap7.source = 'renwu_03.png';
bitmap7.x = 80;
bitmap7.y = 220;
//渲染队列
var renderQueue = [bitmap1, bitmap2, bitmap3, bitmap4, bitmap5, bitmap6,
    bitmap7, text];
//资源加载列表
var imageList = ['BG_01.png', 'BG_02.png', 'CZ_01.png', 'CZ_02.png', 'renwu_01.png',
    'renwu_02.png', 'renwu_03.png'];
//先加载资源，加载成功之后执行渲染队列
loadResource(imageList, function () {
    drawQueue(renderQueue);
});
