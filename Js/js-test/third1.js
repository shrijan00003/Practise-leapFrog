function solution(matrix){
    var upperSpiral=[];//creating empty array
    var lowerSpiral=[];

    while(!isEmpty(matrix)){
        //remove upper row of the matrix 
        var upperRow=popUpperRow(matrix);
        upperSpiral=upperSpiral.concat(upperRow);

        if(!isEmpty(matrix)){
            var bottomRow=popBottomRow(matrix);
            lowerSpiral=lowerSpiral.concat(bottomRow);

            if(!isEmpty(matrix)){
                matrix=rotateMatrixCounterClockWise(matrix)
            }
        }
    }

    var sumOfUpperSpiral=addNumbers(upperSpiral);
    return sumOfUpperSpiral;
}

function isEmpty(matrix){
    if(maxtrix===undefined || maxtrix.lenght===0){
        return true;
    }else{
        return false;
    }
}

function popUpperRow(matrix) {
    return matrix.shift();
}

function popBottomRow(matrix){
    return matrix.pop();
}

function rotateMatrixCounterClockWise(matrix){
    
}