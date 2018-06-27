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


var str = "abbbbcccccd";
var curCount=0;
var curChar;
var MaxCount=0;
var MaxChar;
function solution(str) {
    for(var i=0; i<str.length; i++){
        curChar=str.charAt(i);
        if(curChar===str.charAt[i]){
            //increase
            // curChar=str.charAt(i);
            // console.log("here");
            curCount++;
            // if (curCount>MaxCount){
            //     MaxCount = curCount;
            //     MaxChar=curChar;
            // }
        }else{
            //reset
            // console.log("here");
            curCount=1;
            // MaxCount=curCount;
            // MaxChar=str.charAt(i);
        }
    }

    console.log(MaxChar);

}

solution(str);
