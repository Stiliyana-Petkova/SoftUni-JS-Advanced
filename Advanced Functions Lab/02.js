
function solution(n) {
   
    
   return function s(j) {
      return n + j;

    }
}



let add5 = solution(5);
console.log(add5(2));//7
console.log(add5(3));//8
