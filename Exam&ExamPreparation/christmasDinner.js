class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

  

    shopping([product]) {
        if (this.budget < 0) {
            throw new Error(`The budget cannot be a negative number`)

        }
        let [type, price] = product.split(', ');
        price = Number(price);
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        } else {
            this.products.push(type);
            this.budget -= price;
            return `You have successfully bought ${type}!`
        };
    };

    recipes(recipe) {
        if (this.budget < 0) {
            throw new Error(`The budget cannot be a negative number`)

        };

        let array = [];

        recipe.productsList.forEach(e => {
            if (this.products.includes(e)) {
                array.push(e);
            }
        });

        if (recipe.productsList.length == array.length) {
            this.dishes.push(recipe);
            return `${recipe.recipeName} has been successfully cooked!`
        } else {
            throw new Error("We do not have this product");
        }
    };

    inviteGuests(name, dish) {
        if (this.budget < 0) {
            throw new Error(`The budget cannot be a negative number`)

        };

        let mains = [];
        for (let n of this.dishes) {
            mains.push(n.recipeName);
        }
        if (!mains.includes(dish)) {
            throw new Error("We do not have this dish")
        };

        if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        } else {
            this.guests[name] = dish;
            return `You have successfully invited ${name}!`
        };
    };

    showAttendance() {
        if (this.budget < 0) {
            throw new Error(`The budget cannot be a negative number`)

        };
        let keys = Object.keys(this.guests);
        let res = '';

        for (let key of keys) {
            let products = this.dishes.find(dish => dish.recipeName == this.guests[key]);
            res += `${key} will eat ${this.guests[key]}, which consists of ${products.productsList.join(', ')}\n`

        }
        return res.trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());