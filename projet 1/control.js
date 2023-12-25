const mult = (num1,num2)=>{
    return num1*num2
}

const PI=3.14;
const sum=(num1,num2)=> num1+num2;

class monster{

    constructor(name,lastn,race)
    {
        this.name=name;
        this.lastn=lastn;
        this.race=race;
    }
    get fullname()
    {
        return `${this.name} ${this.lastn}`
    }
}


module.exports.mult = mult;
module.exports.PI=PI;
module.exports.sum=sum;
module.exports.monster = monster;