function solve(area, vol, dataAsJason) {

    const data = JSON.parse(dataAsJason);
    let result = [];

    for (let element of data) {

        const output = {
            area: Math.abs(area.call(element)),
            volume: Math.abs(vol.call(element)),
        }

        result.push(output);

    }
    return result;

}
let examples = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
console.log(solve(area, vol, examples));

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};   