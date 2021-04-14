class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.find(c => c.personalId == customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        } else {
            this.allCustomers.push(customer);

            return customer;
        }
    }

    depositMoney(personalId, amount) {
        if (!this.allCustomers.find(c => c.personalId == personalId)) {
            throw new Error('We have no customer with this ID!')
        } else {
            let cus = this.allCustomers.find(c => c.personalId == personalId);
            if (!cus.totalMoney) {
                cus.totalMoney = amount;
                cus.transaction = [];
               // return `${cus.totalMoney}$`
            } else {
                cus.totalMoney += amount;

            };

            cus.transaction.unshift(`${cus.transaction.length + 1}. ${cus.firstName} ${cus.lastName} made deposit of ${amount}$!`)

            return `${cus.totalMoney}$`
        }
    }

    withdrawMoney(personalId, amount) {
        if (!this.allCustomers.find(c => c.personalId == personalId)) {
            throw new Error('We have no customer with this ID!')
        } else {
            let customer = this.allCustomers.find(c => c.personalId == personalId);
            if(customer.totalMoney < amount) {
                throw new Error (`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
            } else {
                customer.totalMoney -= amount;
                customer.transaction.unshift(`${customer.transaction.length + 1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`)
                return `${customer.totalMoney}$`
            }
        }
    }

    customerInfo(personalId) {
        if (!this.allCustomers.find(c => c.personalId == personalId)) {
            throw new Error('We have no customer with this ID!')
        } else {
            let customer = this.allCustomers.find(c => c.personalId == personalId);

            let res = `Bank name: ${this._bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${customer.totalMoney}$\nTransactions:\n`
            res += customer.transaction.join('\n')
            return res.trim();
        }
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));