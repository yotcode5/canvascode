let canvas=document.getElementById("myCanvas");
let context=canvas.getContext("2d");

let Parag=document.getElementById("Parag");



let Les1=document.getElementById("Les1");
Les1.style.backgroundColor="#04AA6D"

let CODE=`context.lineWidth=20;
context.strokeStyle="blue";
context.moveTo(52,43);
context.lineTo(211,149);
context.lineTo(94,202);
context.strokeStyle="purple";
context.stroke();
context.lineTo(60,259);
context.lineTo(195,287);
context.strokeStyle="yellow";
context.lineWidth=50;
context.moveTo(293,120);
context.lineTo(284,296);
context.lineWidth=10;
context.stroke();
context.lineWidth=25;
context.strokeStyle="green";
context.stroke();
`
Parag.innerText=CODE;

let bobo=`Think of a magic painting tool. There are (at most) four things the tool has in its memory:

a line collection (starts with the empty collection)
a point (starts without one in the memory, hence the "at most" above)
a width (starts with 1 (=one pixel))
a color (starts with "black")

The tool has 5 buttons:

moveTo 
moveTo(x,y) updates the current point to be (x,y).

lineTo
if there is a point in the memory, say (x,y), then lineTo(X,Y) adds to the current line collection the [line from (x,y) to (X,Y)]. If there is no point in the memory, then lineTo(X,Y) does nothing to the line collection. 
In either case, it updates the current point to be (X,Y).

lineWidth
lineWidth=n updates the current width to be n.

strokeStyle
strokeStyle=c updates the current color to be c.

stroke
stroke() does the following: it draws on the canvas the lines that are in line collection using a current_color colored and current_width pixels wide brush.

Remarks:
There is no problem using points that exceed the bounderies of the canvas.
An occurence of stroke does not remove what was drawn by previous occurences of it, it paints over them.


Place the mouse on any line in the code below. 
The canvas will correspond to the code up to the line the mouse is on.
Leave the code area and hit the download link to download the displayed canvas.
`;
document.getElementById("instruction").innerText=bobo;

//--------------------------------------------------------------------------------------------

Parag.addEventListener("mousemove",robertoo);

var currCode='';
var Paragxx="Out of Frame!", Paragyy="Out of Frame!";
Parag.addEventListener("mouseout",()=>{Paragxx="Out of Frame!"; Paragyy="Out of Frame!"});

function robertoo(event) {
    Paragxx=event.offsetX;
    Paragyy=event.offsetY;
    let y=Paragyy;
    let gg=Math.ceil(y/18);
    createBackgImgForParag(gg);
    let tt=theFirst_gg_linesOfCODE(gg);
    context.reset();
    eval(tt);
    currCode=tt;
    let zz;
    canvas.toBlob((blob)=>{zz=URL.createObjectURL(blob); 
                           document.getElementById("myLink").href=zz; 
                           document.getElementById("myLink").download="myCanvas.png"
                           })

} 
function theFirst_gg_linesOfCODE(gg) {
    let cho=CODE.split("\n");
    let u="";
    for (let i=0;i<gg;i+=1) {
        u=u+cho[i]+'\n'
    }
    return u
}


let newCanvas=document.createElement("CANVAS");
newCanvas.width="400";
let newContext=newCanvas.getContext("2d");

function createBackgImgForParag(hh) {
    let o=18*hh;
    newContext.reset();
    newCanvas.height=Parag.offsetHeight;
    newContext.fillStyle="#96d0d6";
    newContext.fillRect(0,0,400,o);
    let r=newCanvas.toDataURL();
    Parag.style.backgroundImage="url("+r+")";
    Parag.style.backgroundRepeat="no-repeat";

}

//------------------------------------------------------------------------------------

let myCopy=document.getElementById("myCopy");
myCopy.addEventListener("click", ()=>{navigator.clipboard.writeText(currCode)});

//---------------------------------------------------------------------------------------

canvas.toBlob((blob)=>{zz=URL.createObjectURL(blob); 
                       document.getElementById("myLink").href=zz; 
                       document.getElementById("myLink").download="myCanvas.png";
                       document.getElementById("myLink").style.display="block";
                       })