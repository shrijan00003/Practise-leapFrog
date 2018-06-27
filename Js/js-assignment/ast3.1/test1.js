var bntNxt = document.getElementById("nxt");
var btnPre = document.getElementById("pre");

var imageWrapper = document.getElementsByClassName("image-wrapper");
// var buttonWrapper = document.getElementById("button-number");

var previousIndex = 0;
var currentIndex = 0;

var images = [
   "./images/1.jpeg",
   "./images/2.jpg",
   "./images/3.jpeg",
   "./images/4.jpeg"
];

console.log(images.length);


loadImages();


bntNxt.onclick = function () {

   previousIndex = currentIndex;
   console.log(previousIndex);

   currentIndex = (currentIndex += 1) % images.length;

//    if(previousIndex === 0 || previousIndex ===3){
//        return null;
//    }

   transitionAnimation(currentIndex,previousIndex,"next");

   // imageWrapper[0].style.marginLeft = currentLeftMargin(currentIndex);
};


btnPre.onclick = function () {

   previousIndex = currentIndex;
   currentIndex = (currentIndex -= 1) % images.length;

//    if (currentIndex < 0) {
//        currentIndex = images.length - 1;
//    }

//    if(previousIndex === 0 || previousIndex ===3){
//        return null;
//    }

   transitionAnimation(currentIndex,previousIndex,"previous");

   // imageWrapper[0].style.marginLeft = currentLeftMargin(currentIndex);
};


function loadImages() {
   for (var i = 0; i < images.length; i++) {

       //add a new image
       var newImage = document.createElement('img');
       imageWrapper[0].appendChild(newImage);
       // newImage.setAttribute("src",images[i]);
       newImage.src = images[i];

       //add a new button
    //    var newButton = document.createElement('button');
    //    newButton.innerHTML = i + 1;
    //    newButton.imagePosition = i;
    //    buttonWrapper.appendChild(newButton);


    //    newButton.onclick = function () {
    //        currentIndex = this.imagePosition;
    //        imageWrapper[0].style.marginLeft = currentLeftMargin(currentIndex) + "px";
    //    };

   }
}


function getLeftMargin(currentIndex) {
   return (currentIndex * -640);
}

function resetLeft(){
    return (images.length* -640);
}

function resetRight(){
    return 0;
}



function transitionAnimation(currentIndex,previousIndex, side) {



   var leftMargin  = getLeftMargin(previousIndex);
   var rightMargin = getLeftMargin(currentIndex);
   console.log("previous index", previousIndex);
   console.log("current index", currentIndex);

   console.log("left margin", leftMargin);
   console.log("right margin", rightMargin);



   var id = setInterval(function () {
       if(leftMargin === rightMargin){
           clearInterval(id);
       }

       if (side==="next")
           leftMargin -= 32;
       else
           leftMargin +=32;

      imageWrapper[0].style.marginLeft = leftMargin + "px";


  },30);

}