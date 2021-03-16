function matrix(array) {
    array1 = array.shift();
    array2 = array.shift();
    array3 = array.shift();
    let isValid = false;

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sumline1 = array1[0] + array2[0] + array3[0];
    let sumline2 = array1[1] + array2[1] + array3[1];
    let sumline3 = array1[2] + array2[2] + array3[2] ;
    for (const line of array1) {
        sum1 += line;
        }
    for(let line of array2) {
        sum2 += line;
    }    
    for(let line of array3) {
        sum3 += line;
    }
    if(sum1 == sum2 && sum2 == sum3 && sum3 == sumline1 && sumline1 == sumline2 && sumline2 == sumline3) {
        isValid = true;
    }
    console.log(isValid);

}

matrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
matrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
matrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);