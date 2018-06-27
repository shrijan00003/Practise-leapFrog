/**
 * SIXTH ASSIGNMENT GIVEN IN JS CLASS ON 25 JUNE
 * CREATING SCATTER POINT INTO SMASHER GAME 
 */

var deletedObj={};
var colors=['red','green','blue','yellow','purple'];
 
function getRandomInt(max=500) {
    return Math.floor(Math.random() * Math.floor(max));
}

//creates x cordinate and y cordinate 
var dataPoint=function(n=5){
    var arr=[];
    for(var i=0;i<n;i++){
        var obj={
            x:getRandomInt(),
            y:getRandomInt(),
            dx:1,
            dy:1,
            $antElem:createAnt(this.x,this.y,colors[i])
        }
        arr[i]=obj;
    }
    return arr;
}

var ants = dataPoint();
console.log(ants);
//give some style to main-wrapper

var $container = document.getElementById("container");

function createAnt(x,y,color) {
    // var $newElement = document.createElement('div');
    // $newElement.style.width = "10px";
    // $newElement.style.height = "10px";
    // $newElement.style.left = x + "px";
    // $newElement.style.top = y + "px";
    // $newElement.style.position = "absolute";
    // $newElement.style.background = color;
    // $container.appendChild($newElement);
    // return $newElement;
}

//fill points to main wrapper
var deletedPoints=[];
function fillWrapper(x,y){
    var newElement=document.createElement('div');
    newElement.style.width = "10px";
    newElement.style.height = "10px";
    newElement.style.left = x + "px";
    newElement.style.top = y + "px";
    newElement.style.position = "absolute";
    newElement.style.background = "red";
    $container.appendChild(newElement);

    //click event

    newElement.addEventListener('click',function() {
        deletedObj={'x':x+"px",'y':y+"px"}
        mainWrapper.removeChild(newElement);
        deletedPoints.push(deletedObj)

        //for deisplaying deleted points
        console.log("deleted points",deletedPoints);
    })
}

//creating ants
data.forEach(function(element){
    fillWrapper(element.x,element.y);
});


