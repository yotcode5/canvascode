let canvas=document.getElementById("myCanvas");
let context=canvas.getContext("2d");

let Parag=document.getElementById("Parag");



let custom=document.getElementById("custom");
custom.style.backgroundColor="#04AA6D"

let bobo=`Place the mouse on any line in the code below. 
The canvas will correspond to the code up to the line the mouse is on.
Leave the code area and hit the download link to download the displayed canvas.`;
document.getElementById("instructionS").innerText=bobo;

let jojo=`After pressing the Begin button, the following keyboard guide takes effect:

b means context.beginPath().
m means context.moveTo(x,y) where (x,y) are the coordinates of the mouse on the canvas (it's OK to be outside of it).
l means context.lineTo(x,y) where (x,y) are the coordinates of the mouse on the canvas (it's OK to be outside of it).
c means context.strokeStyle="color_input" (a prompt opens).
w means context.lineWidth="width_input" (a prompt opens).
s means context.stroke().

At each step, the accumulated code will be written to the right of the canvas, and the pattern generated by that code will be displayed on the canvas. To generate the app, press the Finish button. To start over, press Begin.`;
document.getElementById("guide").innerText=jojo;

//---------------------------------------------------------------------------------------------------------

let BeginBtn=document.getElementById("myBeginBtn");

BeginBtn.addEventListener("click", ()=>{window.addEventListener("keydown",haha);
                                        FinishBtn.disabled=false; 
                                        BeginBtn.disabled=true; 
                                        Parag.removeEventListener("mousemove",robertoo); 
                                        CODE=''; 
                                        currCode=''; 
                                        Parag.innerText=CODE;
                                        Parag.style.removeProperty("background-image");
                                        Parag.style.removeProperty("border"); 
                                        document.getElementById("myLink").href="#"; 
                                        document.getElementById("myLink").style.display="none"; 
                                        document.getElementById("myCopy").style.display="none"; 
                                        document.getElementById("instructionS").style.display="none"; 
                                        context.reset();});


var CODE='';
var xx=0, yy=0;
window.addEventListener("mousemove", event=>{xx=event.pageX-canvas.offsetLeft; 
                                             yy=event.pageY-canvas.offsetTop})


function haha(event) { 
    if (event.key == "m") {
        context.moveTo(xx,yy);
        CODE=CODE+"context.moveTo("+String(xx)+","+String(yy)+");\n";
        Parag.innerText=CODE;
        Parag.style.border="1px solid"; 
    }
    if (event.key=="l") {
        context.lineTo(xx,yy);
        CODE=CODE+"context.lineTo("+String(xx)+","+String(yy)+");\n";
        Parag.innerText=CODE;
        Parag.style.border="1px solid"; 
    }
    if (event.key == "b") {
        context.beginPath();
        CODE=CODE+"context.beginPath();\n";
        Parag.innerText=CODE;
        Parag.style.border="1px solid"; 
    }
    if (event.key == "s") {
        context.stroke();
        CODE=CODE+"context.stroke();\n";
        Parag.innerText=CODE;
        Parag.style.border="1px solid"; 
    }
    if (event.key == "w") {
        let w=window.prompt("pick width");
        context.lineWidth=w;
        CODE=CODE+"context.lineWidth="+String(w)+";\n";
        Parag.innerText=CODE;
        Parag.style.border="1px solid"; 
    }
    if (event.key == "c") {
        let c=window.prompt("pick color");
        context.strokeStyle=c;
        CODE=CODE+"context.strokeStyle="+'"'+String(c)+'"'+";\n";
        Parag.innerText=CODE;
        Parag.style.border="1px solid"; 
    }
    /*
    if (event.key == "C") {
        document.getElementById("myColorInput").click();
        let C=document.getElementById("myColorInput").value;
        contextN.strokeStyle=C;
        CODE=CODE+"contextN.strokeStyle="+'"'+String(C)+'"'+";\n";
        ParagN.innerText=CODE;
    }*/
    
}




//-------------------------------------------------------------------------------------

let FinishBtn=document.getElementById("myFinishBtn");
FinishBtn.disabled=true;

FinishBtn.addEventListener("click", ()=>{Parag.addEventListener("mousemove",robertoo); 
                                         myCopy.style.display="block";
                                         BeginBtn.disabled=false; 
                                         FinishBtn.disabled=true; 
                                         window.removeEventListener("keydown",haha); 
                                         document.getElementById("myLink").style.display="block"; 
                                         document.getElementById("instructionS").style.display="block"; 
                                         context.reset();
                                         let zz;
                                         canvas.toBlob((blob)=>{zz=URL.createObjectURL(blob); 
                                                                document.getElementById("myLink").href=zz; 
                                                                document.getElementById("myLink").download="myCanvas.png"
                                                                })

                                        });





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

let myRemoveUpload=document.getElementById("myRemoveUpload");
myRemoveUpload.addEventListener("click",()=>{canvas.style.removeProperty("background-image")});

//--------------------------------------------------------------------------------------------------

let ZhenyasNASA_APIkey="PXnZuew4VCDnkUgZW7KeYHeuoOYvkyOs5rAiCuOG";//I need to request one from nasa for myself
let myTempApi=ZhenyasNASA_APIkey;
let YotamsNASA_APIkey="btdIiqayVinaEJREfwRZBiHhMkHayhBGYfVtgcoB"; //Nasa sent one to my email!
myTempApi=YotamsNASA_APIkey;

var APODwidth=0, APODheight=0;
var neededcanwidth=0, neededcanheight=0;


function gettenumber(Nasaw,Nasah) {
    if (Nasaw>=Nasah) {
        neededcanheight=Math.ceil((Nasah/Nasaw)*400); neededcanwidth=400
    }
    else {
        neededcanwidth=Math.ceil((Nasaw/Nasah)*400); neededcanheight=400
    }
}

async function AstroImgOfTheDayUrlSmart(NASA_APIkey) {
    let g="https://api.nasa.gov/planetary/apod?api_key="+NASA_APIkey;
    const h = await fetch(g);
    const hh = await h.json();
    const hhh = hh.url;
    let img=document.createElement("img");
    img.addEventListener("load",()=>{APODwidth=img.width; 
                                     APODheight=img.height; 
                                     gettenumber(APODwidth,APODheight);
                                     document.getElementById("myNasa").style.display="block"; 
                                     document.getElementById("myNasa").addEventListener("click",()=>{canvas.width=neededcanwidth; 
                                                                                                     canvas.height=neededcanheight; 
                                                                                                     canvas.style.backgroundImage="url("+hhh+")"; 
                                                                                                     canvas.style.backgroundSize="contain"; 
                                                                                                     let z = BeginBtn.disabled ? CODE : currCode; 
                                                                                                     context.reset(); 
                                                                                                     eval(z);
                                                                                                     let zz;
                                                                                                     canvas.toBlob((blob)=>{zz=URL.createObjectURL(blob); 
                                                                                                                            document.getElementById("myLink").href=zz; 
                                                                                                                            document.getElementById("myLink").download="myCanvas.png"
                                                                                                                            })
                                                                                                    
                                                                                                    })});
    img.src=hhh;
    

} 

AstroImgOfTheDayUrlSmart(myTempApi)


//---------------------------------------------------------------------------------------------------

let myUpload=document.getElementById("myUpload");
var UPLwidth=0, UPLheight=0;
var UPLneededcanwidth=0, UPLneededcanheight=0;

function gettenumberUPL(Nasaw,Nasah) {
    if (Nasaw>=Nasah) {
        UPLneededcanheight=Math.ceil((Nasah/Nasaw)*400); UPLneededcanwidth=400
    }
    else {
        UPLneededcanwidth=Math.ceil((Nasaw/Nasah)*400); UPLneededcanheight=400
    }
}

async function addBackgroundImageSmart() {
    let haroo = new FileReader();
    let LLL;
    console.log("pick a file")
    let DDD = await showOpenFilePicker();
    console.log("a file has been picked!");
    let FFF = DDD[0]
    let GGG = await FFF.getFile();
    haroo.addEventListener("load", (event)=>{
        const textito = event.target.result
        LLL=textito;
        let img=document.createElement("img");
        img.addEventListener("load", ()=>{UPLwidth=img.width; 
                                          UPLheight=img.height; 
                                          gettenumberUPL(UPLwidth,UPLheight); 
                                          canvas.width=UPLneededcanwidth; 
                                          canvas.height=UPLneededcanheight; 
                                          canvas.style.backgroundImage="url("+LLL+")"; 
                                          canvas.style.backgroundSize="contain"; 
                                          let z = BeginBtn.disabled ? CODE : currCode; 
                                          context.reset(); 
                                          eval(z);
                                          let zz;
                                          canvas.toBlob((blob)=>{zz=URL.createObjectURL(blob); 
                                                                 document.getElementById("myLink").href=zz; 
                                                                 document.getElementById("myLink").download="myCanvas.png"
                                                                 })                                          
                                        
                                        })
        img.src=LLL;
        
    });
    haroo.readAsDataURL(GGG)
   
};
myUpload.addEventListener("click",()=>{addBackgroundImageSmart()});

//-------------------------------------------------------------------------------------------------------

let myResetBackground=document.getElementById("myResetBackground");
myResetBackground.addEventListener("click",gog);

function gog() {
    canvas.style.removeProperty("background-image");
    canvas.width=400;
    canvas.height=400;
    let z = BeginBtn.disabled ? CODE : currCode;
    context.reset();
    eval(z);
    let zz;
    canvas.toBlob((blob)=>{zz=URL.createObjectURL(blob); 
                           document.getElementById("myLink").href=zz; 
                           document.getElementById("myLink").download="myCanvas.png"
                           })    
}
//------------------------------------------------------------------------------------------------------