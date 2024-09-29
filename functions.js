function add(a,b){
    c=a+b;
    console.log(c);
    
}

add(4,8)


const getAvg = function(a,b,c){
    var a1=(a+b+c)/3;
    // console.log(a1);
    return a1;
    
}
 res=getAvg(60,60,60);
 console.log(res);
 

 const fact = (n)=> {
    let f=1;

    for(let i=1;i<=n;i++){
        f=f*i;
    }
    return f;
 }

console.log(fact(5));


let n=145;
let s=0;
while(n>0){
    let r= n%10;
    s=s+(r**3);
    n=n/10;
}

  if(s==n){
    console.log('arm strong');
}


let n2= 151;
let d=0;
while(n2>0){
    let r =n2%10;
    d = d*10+r;
    n2=n2/10;
}

if(n2==d){
    console.log('palindrome');
    
}