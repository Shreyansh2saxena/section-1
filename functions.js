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


