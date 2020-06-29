var canvas,backgroundImg;
var painterCount;
var allpainters;
var gameState=0;
var database;

var form,painter,game;

function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
}


function draw(){
    if (painterCount===4){
        game.update(1);
    }
}