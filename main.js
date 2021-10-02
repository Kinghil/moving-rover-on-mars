canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;


function add() {
    background_imgtag = new Image();
    background_imgtag = uploadbackground;
    background_imgtag.src = background_image


    rover_imgtag = new Image();
rover_imgtag.onload = uploadrover
rover_imgtag.src = rover_image;
}
function uploadbackgroundr() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover.width, rover.height);
}
window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
    keyPressed = e.keycode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {

        up();
        console.log("up")

    }
    if(keyPressed == 40)
    { 
        down();
        console.log("down")
    }
    if(keyPressed == 37)
    {
        Left();
        console.log("left")
    }
    if(keyPressed == '39')
{
    right();
    console.log("right");
}
}
function up()
{

    if(rover >=0)
console.log("when up arrow is pressed= " + "-" +rover_y)
uploadbackground();
uploadwater();
uploadrover();
}

function down()
{

    if(rover_y <=500)
console.log("when down arrow is pressed, x = "  + rover_x  +  " i y" +rover_y)
uploadbackground();
uploadwater();
uploadrover();
}

function left()
 {

    if(rover_x >=0)
    rover_x -= 10;
    console.log("when left arrow is pressed x =" + rover_x + " i y= " +rover_y)
    uploadbackground();
    uploadwater();
    uploadrover();

 }

 function right()
 {

    if(rover_x <= 700)

    rover_x += 10
    console.log("when  right arrow is pressed x =  + rover_x " +  " i y" +rover_x)
 }