/**
 * LOWER SPIRAL AND UPPER SPIRAL PROBLEM
 * REMOVE THE TOP ROW AND ASSIGN ITS ELEMENT TO THE UPPER SPIRAL
 * IF NON EMPTY MATRIX IS LEFT THEN REMOVE THE BOTTOM ROW OF THE MATRIX AND ASSIGN IT TO THE 
 *  LOWER SPIRAL
 * IF NON-EMPTY MATRIX IS LEFT ROTATE IT COUNTER-CLOCKWISE
 * TOD0
 * ------
 * CREATE  MATRIXS ORIGIN UPPER SPIRAL AND LOWER SPIRAL
 * CHECK IF THE MATRIX IS EMPTY
 * 
 * 
 */
var originArr=[
    [5,3,8,9,4,1,3,-2],
    [4,6,0,3,6,4,2,1],
    [4,-5,3,1,9,5,6,6],
    [3,7,5,3,2,8,9,4],
    [5,3,-3,6,3,2,8,0],
    [5,7,5,3,3,-9,2,2],
    [0,4,3,2,5,7,5,4]
];

var upperSpi=[];
var lowerSpi=[];

function isArrEmpty(array) {
    console.log(array.length);
    if (array === undefined || array.length == 0) {
        return true;
    }else{
        return false;
    }
}
makeSpiral(originArr);
function makeSpiral(mat){
    if(!isArrEmpty(mat)){
        upperSpi.push(mat[0]);
        lowerSpi.push(mat[mat.length-1]);
        originArr.splice(0,1)
        originArr.splice(mat.length-1,1)
        makeUpperSpiral(originArr);
        makeLowerSpiral(originArr);

    }

}

function makeUpperSpiral(mat){
    console.log("upper",mat);
}

function makeLowerSpiral(mat){
    console.log("lower",mat);
}

console.log(upperSpi);
console.log(lowerSpi);
console.log(originArr);

