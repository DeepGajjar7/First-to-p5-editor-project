function preload(){

}

function setup(){
canvas=createCanvas(600,400)
canvas.center()
video=createCapture(VIDEO)
video.hide();
tintcolor="" 
}

function draw(){
tint(tintcolor)
strokeWeight(30)
stroke("green")
rect(10,10,580,380)
stroke("red")
circle(20,20,30)
circle(20,380,30)
circle(580,20,30)
circle(580,380,30)
image(video,100,50,400,300)
}

function applyfilter(){
    tintcolor=document.getElementById("color").value
}

function take_snapshot(){
    save("selfie.png")
}