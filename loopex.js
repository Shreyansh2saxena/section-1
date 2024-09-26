
let[a,b]=[0,1];

console.log(a);
console.log(b);

for(let i=0;i<8;i++){
    let c= a+b;
    console.log(c);
    // a=b
    // b=c
     [a,b]=[b,c];
    
}

for(let i=50;i<=1000;i++){
    let sq= i**0.5;
    if(Number.isInteger(sq)){
        console.log(i+ ' ' +'is perfect sq');
        
    }
}
 

for(let num=50;num<=1000;num++){
    let prime=true;
for(let i=2;i<num;i++){
    if(num%i===0){
       
        prime = false
        break;
    }
}
if(prime) console.log(num);
}
  