function construction(worker) {

    if (worker.dizziness == true) {
        let kilos = worker .weight;
        let years = worker.experience;
        worker.levelOfHydrated += (0.1 * kilos) * years;
        worker.dizziness = false;
        return worker;

    } else {
        return worker;
    }

}

console.log(construction({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));

