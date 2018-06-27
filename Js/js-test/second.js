
var num=20233;
var str=num.toString();
console.log(str);
// console.log(str.length);

var sum=0;
// var first=0;
// var last=0;
var mul;
var i=0;


function calculate(str){
    // console.log(str.charAt(0));
    while(i<str.length){
        // console.log(str.charAt[0]);
        mul=parseInt(str.charAt(0))*parseInt(str.charAt(str.length-1));
        // console.log(mul);
        if(str.length===1){
            sum+=parseInt(str.charAt(0));
        }else{

            sum+=mul;
        }

        // str=str.substr(1);
        str=str.slice(1,-1);
    }

    // console.log(mul);

    console.log(sum);
    return sum;
}

console.log(calculate(str));

// function calculate(str){
//   if(str.length===1){
//       return parseInt(str[0]);
//   }
//  first=parseInt(str.shift());
//  console.log("first",first);

//  last=parseInt(str.pop());
//  console.log("last",last);
//  mul=first*last;

// console.log(mul);


//  sum=mul+calculate(str)
//  console.log(sum);

// }