class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
        
    }

    addCar( carModel, carNumber ) {
        if(this.capacity <= 0) {
            throw new Error('Not enough parking space.')
        }else {
            this.vehicles.push({carModel, carNumber, payed: false});
            this.capacity--;
            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        };
    }

    removeCar( carNumber ) {
        if(!this.vehicles.find(name => name.carNumber == carNumber)) {
            throw new Error("The car, you're looking for, is not found.");
        };
        if(this.vehicles.find(car => car.payed == false)) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        };

        let index = this.vehicles.findIndex(car => car.carNumber == carNumber);
        this.vehicles.splice(index, 1);
        this.capacity++;
        return `${carNumber} left the parking lot.`
    }

    pay( carNumber ) {
        if(!this.vehicles.find(name => name.carNumber == carNumber)) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        };
        if(this.vehicles.find(car => car.payed == true)) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        };

        this.vehicles.find(name => name.carNumber == carNumber).payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        if(!carNumber) {
            this.vehicles.sort((a,b) => a.carModel.localeCompare(b.carModel));
            return [
                `The Parking Lot has ${this.capacity} empty spots left.`,
                this.vehicles.map(car => `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`)
                .join('\n')
                
            ].join('\n')
        }else {
            let car = this.vehicles.find(car => car.carNumber == carNumber);
            return `${car.carModel} == ${carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`
        }

    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics('TX3691CA'));
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));