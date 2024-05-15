let canvas=document.getElementById("myCanvas");
let context=canvas.getContext("2d");

let Parag=document.getElementById("Parag");



let welcome=document.getElementById("welcome");
welcome.style.backgroundColor="#04AA6D"

let CODE=`context.lineWidth=8;
context.strokeStyle="blue";
context.moveTo(72,346);
context.lineTo(67,233);
context.stroke();
context.lineTo(122,187);
context.moveTo(66,234);
context.lineTo(21,179);
context.moveTo(245,345);
context.lineTo(244,228);
context.lineTo(335,226);
context.stroke();
context.lineWidth=1;
context.strokeStyle="black";
context.moveTo(244,278);
context.lineTo(321,280);
context.stroke();
`
Parag.innerText=CODE;

let bobo=`This website will teach the user how to draw on a <canvas> element using javascript. If canvas is a <canvas> element, then to draw on it, we need to work with its context (canvas.getContext("2d")). 
For example, in this page's script we have:

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

Our operations of interest are the following:
context.moveTo(x,y) (e.g., context.moveTo(25,300))
context.lineTo(x,y) (e.g., context.lineTo(200,150))
context.stroke() 
context.strokeStyle (e.g., context.strokeStyle="rgb(100,23,200)")
context.lineWidth (e.g., context.lineWidth=5)
context.beginPath()

The teaching will be done via interactive canvases as the one below.
The "Custom Interactive Canvas" tab can be used both for further practice,
and for recreation.


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





                