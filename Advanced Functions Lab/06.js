function solve(input) {

    let result = [];
   
    
    for (const line of input) {
      let [command, str] = line.split(' ');
     if(command == 'add') {
         result.push(str);
     } else if(command == 'remove') {
       if (result.includes(str)) {
           while(result.includes(str)) {
           let index = result.indexOf(str);
           result.splice(index,1);
           }
           
       }
     } else {
         console.log(result.join(','));
     }
}
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add peter', 'add george', 'add peter', 'remove peter','print']);