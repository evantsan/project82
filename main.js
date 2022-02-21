var mouseEvent = "empty"
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var colred = 'empty'
var radred = 'empty'
var wid = 'empty'
canvas.addEventListener("mousedown",My_mousedown)
function My_mousedown(e)
{
    colred = document.getElementById("colo").value;
    radred = document.getElementById("numbe").value;
    wid = document.getElementById("widt").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup",My_mouseup)
function My_mouseup(e)
{
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave",My_mouseleave)
function My_mouseleave(e)
{
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove",My_mousemove)
function My_mousemove(e)
{
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown")
    {
        console.log("Current position of x and y coordinates = ")
        console.log("x = " + cpx + "y = " + cpy);
        ctx.beginPath();
        ctx.strokeStyle = colred;
        ctx.lineWidth = wid;
        ctx.arc(cpx,cpy,radred,0,2*Math.PI);
        ctx.stroke();
    console.log(colred)
    console.log(radred)
    console.log(wid)
    }
}