function solve(...input) {
    let obj = {};

    for (const line of input) {
        let n = typeof line;

        if (!obj[n]) {
            obj[n] = [];
        }

        obj[n].push({ n, line });
    }

    let keys = Object.keys(obj);
    
    for (let key of keys) {
        
        obj[key].forEach(x => console.log(`${x.n}: ${x.line}`))
    }

    for (let key of keys) {
  
       console.log(`${key} = ${obj[key].length}`);
    }

}

solve(42, 'cat', 15, 'kitten', 'tomcat');