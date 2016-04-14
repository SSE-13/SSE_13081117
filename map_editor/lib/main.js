"use strict";
const fs = require('fs');
function readFile(path) {
    var map_path = __dirname + path;
    var content = fs.readFileSync(map_path, "utf-8");
    var obj = JSON.parse(content);
    var mapData = obj.map;
    return mapData;
}
function writeFile() {
    var map_path = __dirname + "/map.json";
    var content = fs.readFileSync(map_path, "utf-8");
    var obj = JSON.parse(content);
    obj.map = mapData;
    fs.writeFileSync(map_path, JSON.stringify(obj), "utf-8");
    return mapData;
}
function createMapEditor() {
    var world = new editor.WorldMap();
    var rows = mapData.length;
    var cols = mapData[0].length;
    for (var col = 0; col < rows; col++) {
        for (var row = 0; row < cols; row++) {
            var tile = new editor.Tile();
            tile.setWalkable(mapData[row][col]);
            tile.x = col * editor.GRID_PIXEL_WIDTH;
            tile.y = row * editor.GRID_PIXEL_HEIGHT;
            tile.ownedCol = col;
            tile.ownedRow = row;
            tile.width = editor.GRID_PIXEL_WIDTH;
            tile.height = editor.GRID_PIXEL_HEIGHT;
            world.addChild(tile);
            eventCore.register(tile, events.displayObjectRectHitTest, onTileClick);
        }
    }
    return world;
}
var SaveData = new Array();
function onTileClick(tile) {
    if (tile.color == "#0000FF") {
        tile.color = "#FF0000";
        mapData[tile.ownedRow][tile.ownedCol] = 0;
    }
    else {
        tile.color = "#0000FF";
        mapData[tile.ownedRow][tile.ownedCol] = 1;
    }
}
function onSaveClick() {
    var data = JSON.parse(JSON.stringify(mapData));
    SaveData.push(data);
    writeFile();
    alert("保存成功");
}
function onCancelClick() {
    if (SaveData.length > 0) {
        mapData = SaveData.pop();
        writeFile();
        console.log(mapData);
        var rows = mapData.length;
        var cols = mapData[0].length;
        for (var col = 0; col < rows; col++) {
            for (var row = 0; row < cols; row++) {
                editor.children[row * cols + col].setWalkable(mapData[col][row]);
            }
        }
        alert("撤销成功");
    }
    else {
        alert("没有可撤销的步骤");
    }
}
var save = new render.TextField("保存");
save.x = 20;
save.y = 200;
var cancel = new render.TextField("撤销");
cancel.x = 80;
cancel.y = 200;
var mapData = readFile("/map.json");
SaveData.push(JSON.parse(JSON.stringify(mapData)));
var renderCore = new render.RenderCore();
var eventCore = new events.EventCore();
eventCore.init();
var container = new render.DisplayObjectContainer();
var editor = createMapEditor();
container.addChild(editor);
container.addChild(save);
container.addChild(cancel);
renderCore.start(container);
eventCore.register(save, events.displayObjectTextHitTest, onSaveClick);
eventCore.register(cancel, events.displayObjectTextHitTest, onCancelClick);
