let canvas=document.getElementById("myCanvas");
let context=canvas.getContext("2d");

let Parag=document.getElementById("Parag");



let Les2=document.getElementById("Les2");
Les2.style.backgroundColor="#04AA6D"

let CODE=`context.lineWidth=10;
context.strokeStyle="blue";
context.moveTo(-23,124);
context.lineTo(192,-72);
context.lineTo(290,157);
context.stroke();
context.lineWidth=20;
context.strokeStyle="purple";
context.beginPath();
context.moveTo(107,110);
context.lineTo(324,67);
context.stroke();
context.beginPath();
context.lineTo(176,158);
context.lineTo(223,253);
context.stroke();
`
Parag.innerText=CODE;

let bobo=`To the magic tool from lesson 1 add another button:

beginPath
beginPath() updates the line collection to be the empty collection,
and if there is a point in the memory, it removes it. Notably, it affects neither
the color nor the width.


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
