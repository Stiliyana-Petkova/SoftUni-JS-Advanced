function solution() {

    let input = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(str) {
        input += str;
    }

    function removeStart(n) {
        input = input.slice(n);
    }

    function removeEnd(n) {
        input = input.slice(0, -n)
    }

    function print() {
        console.log(input);
    }

}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
