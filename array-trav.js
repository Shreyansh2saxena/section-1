nums =[1,3,7,9,6,8,4]

for(let i=0; i<nums.length;i++){
    console.log(nums[i]);
    
}

for(let n of nums){
    console.log(n);
    
}


    nums.forEach((a,b,c)=> { console.log(a,b,c);  //
    })


    for(let n of nums){
        if(n%2==0){
            console.log(n);
            
        }
    }
console.log("----------");
    let a=[];
    for(let n of nums){
        if(n%2!==0){        
            a.push(n)
           
            
        }
    }
    console.log(a);


    let a1=[];
    for(let n of nums){
        a1.push(n**2)
           
        }
    
    console.log(a1);


    //map function alt for loop and don't have to make new array , works only on array

const sq=  nums.map( (n)=> {return n**2})
console.log(sq);

const names = ['raju','ramu','pinki','kaliya','chutki']

const un = names.map( (n)=> {return n.toUpperCase()})
console.log(un);





const p2=[2500,8900,4000,3760,4980]
const p1 = p2.map((s)=>{return s+(s*.18)})
console.log(p1);


const r = ['ayush joshi','ankit singh','shreyansh saxena','hamid khan']
const j = r.map((k)=>{return k.split(' ')[0] })
console.log(j);


// filter 

const bp = p2.filter( (p) => { return p>1000});
console.log(bp);


const num2= [3,4,8,7,6,5,9,1]
const eve = num2.filter((e)=>{ return e%2!==0})
console.log(eve);


const fn = ['raju','ramu','pinki','kaliya','chutki'];
const l = fn.filter((a)=> {return a.length > 4})
console.log(l);


