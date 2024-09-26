n=36
if(n%2===0){
    console.log('eve');
    m='good'
    let m2='hello'
     const a=5 //unchangable  

    
}
else{
    console.log('odd');
    
}
console.log(m);

const w=77
if(w%7===0 && w%11 ===0){
    console.log(true);
    
} 

for(let i=0;i<10;i++){
    console.log(i);
    
}


let a=10;
while(a<10){
    console.log(a);
    a++ ;
}

let b=20;
do{
    console.log(b);
    b++
}
while(b<20)




for(let i=100;i<=200;i++){
    
    if(i%2==0){
       
        console.log(i);
    }
}


let num=10;
let prime=true;
for(let i=2;i<num;i++){
    if(num%i===0){
        console.log("not prime");
        prime = false
        break;
    }
}
if(prime) console.log("prime");

let n1=5678
let r=0;

while(n1>0){
    const d=n1%10
    r=r*10+d
    n1=parseInt(n1/10)
}
console.log(r);
