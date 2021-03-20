function solve(arr, str) {

    if(str == 'asc') {
        arr.sort((a,b) => a-b);
        return arr;
    } else {
        arr.sort((a,b) => b-a);
        return arr;
    }
}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');
