function solve(steps, foodprint, speed) {
    let metres = steps * foodprint;
    let breaks = Math.trunc(metres / 500)*60;
     speed = speed * 1000 / 3600;
    let time = metres / speed + breaks;

    let hours = Math.floor(time/60/60).toFixed(0).padStart(2, "0");
    let minutes = Math.floor((time - hours * 3600)/ 60);
    let seconds = time - hours * 60 * 60 - minutes * 60;
    console.log(`${hours}:${minutes.toFixed(0).padStart(2, "0")}:${Math.ceil(seconds.toFixed(2).padStart(2, "0"))}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);
