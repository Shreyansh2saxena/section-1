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

// spread array
const p = [1,2,3,4];
const b = [6,8,9,0];
 const c = [...p,...b,...a]
console.log(c);

//to singlised array in array

const anr =[1,2,3,[4,5,6],7,[6,7,[8,9,0]]];
const real = anr.flat(Infinity) //infinty defines no. of depth 
console.log(real);

// convert string into array ; Array.of also use for various converting element into array
console.log(Array.from('shreyansh'));






