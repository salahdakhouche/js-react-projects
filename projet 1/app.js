const controler = require('./control');
console.log(controler.mult(3,2));
console.log(controler.sum(4,3));

const gozilla = new controler.monster('gozilla','japanese','croco');
let expr = 'nom';
let exp = 'gnom';
const big = {
    lenom: "big",
    set [expr](v){this.lenom =v;} ,
    get [exp](){return this.lenom;}
    
};
big.nom='salah';
console.log(big.gnom);

console.log(gozilla.fullname);
let [first,last,age] = ["salah","dakhouche",26];
console.log(first+" "+last+" has "+age+" years old");


let andy = {ename:"salah"}, luffy ={ename:"luffy"}, sanjy= {ename:"sanjy"};

let mmap = new Map();
mmap.set(andy,"developper");
mmap.set(luffy,"anime character");
mmap.set(sanjy,"luffy's friend");
console.log(mmap.values());
for(let nn of mmap.values())
{
console.log(nn);
}

console.log(mmap.keys());
for(let nn of mmap.keys())
{
console.log(nn);
}
