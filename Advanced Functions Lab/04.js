function solve(data, criteria) {

    data = JSON.parse(data);
    let [first, info] = criteria.split('-');
    let result = [];

    for (const employee of data) {

        if (employee[first] == info) {

            result.push(employee);

        }
    }

    for (let i = 0; i < result.length; i++) {

        console.log(`${i}. ${result[i].first_name} ${result[i].last_name} - ${result[i].email}`);
    }


}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);