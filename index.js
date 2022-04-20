const chooseOptimalDistance = (t, k, ls) => {
  var m=[];
  let sumMas = [];
  var combinations = [];
  var indices = [];
  let sum = 0;
  var len=ls.length;
  function FindComb(level){    
    for(var i=0; i < len; i++){            
	  if(!indices[i]){            
	    indices[i] = true;                
		  combinations[level] = ls[i]; 
		  if(level < k - 1) FindComb(level + 1);
		  else  m.push(([]).concat(combinations));
      indices[i] = false;
	  }
	}        
  }    
  FindComb(0);
  const initialValue = 0;
  let idx = 0;
  for(let i = 0; i < m.length; i++){
    let sumPar = 0;
    sumPar = m[i].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
   
);
     if(sumMas.indexOf(sumPar) == -1)
     {
       sumMas[idx] = sumPar;
       idx++;
     }
  }


  for(let i = 1;i<sumMas.length;i++)
  {
    if(sum < sumMas[i] && sumMas[i] < t)
    {
      sum = sumMas[i];
    }
    else break;
    
  }
 
   if( sum !== 0)return sum;
   return null;
}
console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseOptimalDistance(163, 3, [50])); // null