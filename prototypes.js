const zombie = {
    getBrainEat () {
        return 'yum :brain'
    }
}

// prototype inheritance
const chad = Object.create(zombie, { name: {value: 'sandy'}})

console.log('zombie', zombie.getBrainEat());
console.log('chad', chad.name);
console.log('chad zombie', chad.getBrainEat());
console.log('get prototype', chad.__proto__); // this not a best practice
console.log('get prototype', Object.getPrototypeOf(chad)); // this not a best practice


Array.prototype.fun = () => {
    console.log('im fun')
    return false
}

const da = [];

console.log(da.fun())