class Company {
    constructor() {
        this.departments = [];
    };

    check(element) {
        if (element == '' || element == undefined || element == null) {
            throw new Error('Invalid input!')
        };
    }
    addEmployee(username, salary, position, department) {

        if (salary < 0) {
            throw new Error('Invalid input!')
        } else if (!this.check(username) && !this.check(salary) && !this.check(position) && !this.check(department)) {

            let newEmploy = {
                username: username,
                salary: Number(salary),
                position: position
            }

            if (!this.departments[department]) {
                this.departments[department] = [];
            }
            this.departments[department].push(newEmploy);
            return `New employee is hired. Name: ${username}. Position: ${position}`
        }
    };

    bestDepartment() {
        let maxSalary = 0;
        let department = '';
        Object.entries(this.departments).forEach(([key, value]) => {
            let salary = 0;
            value.forEach(e => {
                salary += e.salary
            });

            salary = salary / value.length;
            if (salary > maxSalary) {
                department = key;
                maxSalary = salary;
            }
        });

        
        if(department != '') {
        let res = `Best Department is: ${department}\nAverage salary: ${maxSalary.toFixed(2)}\n`;
        Object.values(this.departments[department]).sort((a, b) => b.salary - a.salary
            || a.username.localeCompare(b.username)).forEach(e => {
                let em = `${e.username} ${e.salary} ${e.position}\n`;
                res += em;
            });
            return res.trim();
        }
    }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());