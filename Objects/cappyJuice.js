function cappy(input) {
    let objBottles = {};
    let obj = {};
    let bottles = 0;
    let newBottle= 0;
    for (let line of input) {
        let [juice, qty] = line.split(' => ');
        qty = Number(qty);
        
        
        if(qty >= 1000) {
           

            bottles = Math.floor(qty / 1000);
            
            qty = qty - (bottles * 1000);
            if(bottles > 0) {
                
                objBottles[juice] = newBottle;
                bottles = objBottles[juice] + bottles;
                objBottles[juice] = bottles;

               
            }
    
        } 
            
         if(obj.hasOwnProperty(juice)) {
            qty += obj[juice];
            obj[juice] = qty;
            if(qty >= 1000) {
            bottles = Math.floor(qty / 1000);
            
            qty = qty - (bottles * 1000);
            obj[juice] = qty;
            if(bottles > 0) {
            bottles += Number(objBottles[juice]);
            objBottles[juice] = bottles;
            }
            
        }
        } else {
            obj[juice] = qty;
            //objBottles[juice] = Number(bottles);
        }
        
        
    }

    let keys = Object.keys(objBottles)
    for(let key of keys) {
        console.log(`${key } => ${objBottles[key]}`);
    }
}



cappy(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
cappy(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);