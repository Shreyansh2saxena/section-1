const user = {
    name: 'raju',
    email: 'raju123@gmial.com',
    password: "abc123"
};

console.log(user);
console.log(user.name);
user.address = 'lucknow'  //add value in object
console.log(user);

console.log(Object.keys(user));  //access key
console.log(Object.values(user));  //access value


const sp ={
    brand : 'samsung',
    model : 'galaxy m31',
    price : 14999,
    color : [' black',' blue', 'red']
}

sp.model ='galaxy s24'

console.log(sp.color[1]);
console.log(sp.color[0]='white');
console.log(sp);
sp.color.push ('green')
console.log(sp)





const spl = [{
    brand : 'samsung',
    model : 'galaxy m31',
    price : 17999,
    color : ['black',' blue', 'red']
},

{
    brand : 'oneplus',
    model : '8t',
    price : 42999,
    color : ['black',' silver']
},
{
    brand : 'apple',
    model : 'i14',
    price : 89000,
    color : ['black',' blue', 'red']
},
{
    brand : 'realme',
    model : 'narzo 20 pro',
    price : 15999,
    color : ['black',' green', 'red']
},
{
    brand : 'xiaomi',
    model : 'redmi note 9 pro',
    price : 13999,
    color : ['black',' blue', 'red']
}
];

spl[3].color[0]='silver';
console.log(spl[3].color[0]);

spl[4].color.push('yellow');
console.log(spl[4].color);

console.log('-----------');

const bud = spl.filter((p)=> {return p.price> 15000 && p.price <20000})
console.log(bud);

const b = spl.map((p)=> {return p.brand});
console.log(b);

const u = spl.filter((p)=>{return p.color.includes('black')})
console.log(u);


const r = spl.filter((p)=>{return p.brand ==='samsung'})
console.log(r);

const keyword = 'sa';
const fil = spl.filter((p)=>{return p.brand.toLowerCase().includes(keyword.toLowerCase())})












