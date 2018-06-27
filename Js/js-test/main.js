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


var str ="abcccddddcc";
function solution(str){
    //
    // console.log(str);
    var output;
    var repIndex={};
    var counter=1;
    var maxChar;
    for(var i=0; i< str.length; i++){
        var c=str.charAt(i);
        repIndex[c]=counter;
        if(str.charAt(i)===str.charAt(i++)){
            repIndex[c]=counter++;
        }
    }

    console.log(repIndex);

    // return output;
}

console.log(solution(str));
