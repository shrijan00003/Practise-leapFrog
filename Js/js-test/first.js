// From a given string find the character which has repeated consecutively the most.

//     Example:
// - “abccc” should return “c”
// - “bbcccbb” should return “c”
// - “aabbbbbcnnmz” should return “b”
// - “mjnuuiii123888888nnhujh” should return “8”

// * Incase of same number of repetitions, later one should be returned
//     - “ab00mj11” should return “1”
// * Incase of all single items, last character should be returned
//     -  “abc”  should return “c”


var str = "abc";
var curCount=1;
var curChar;
var maxCount=0;
var maxChar;
console.log("len",str.length);
function solution(str) {
    curChar=str.charAt(0);
    for(var i=1; i<str.length; i++){
        if(curChar===str.charAt(i)){
            //increase
            console.log("increase");
            curCount++;
        }else{
            //reset
            console.log("reset");
            curChar=str.charAt(i);
            curCount=1;
        }

        //compare
        if(curCount>=maxCount){
            maxCount=curCount;
            maxChar=curChar;
        }


    }
    
    // console.log("current char",curChar);
    console.log("current char",curChar);
    console.log("current count",curCount);
    console.log("max count",maxCount);
    console.log("max char",maxChar);

}

solution(str);
