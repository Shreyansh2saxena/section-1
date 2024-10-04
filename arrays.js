const a=['hello', 32 , true];

console.log(typeof a);

console.log(Array.isArray(a));

const ar = [ 'stree','salar','pathan', 'john wick', 'spider man'];

console.log(ar.length);  //for stirngs also 
console.log(ar.indexOf('spider man'));
console.log(ar.at(-2));  // for giving negative index

ar[2]= 'james bond'

console.log(ar);
// slicing
console.log( ar.slice(1));
console.log( ar.slice(1,3));
console.log( ar.slice(-3));

// adding and removing elemmet
ar.push('batman')
console.log(ar);
ar.unshift('flash')
console.log(ar);
ar.pop();  //from end
ar.shift()  //remove from start 
console.log(ar);


ar.splice(2,2) //remove element from index and upto places
console.log(ar);

ar.splice(-2,0 ,'flash', 'arrow','shadow and bow') //remove element from index and upto places
console.log(ar);











