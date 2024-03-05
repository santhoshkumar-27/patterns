// builder pattern

class Burger {
    constructor(
        public bun: string,
        public ketchup: boolean,
        public mustrad: boolean,
        public kraut: boolean,
    ) {
    }
}



const semBurger = new Burger('wheat', true, true, true);



class BurgerBuilder {

    private ketchUp: boolean;
    private mustrad: boolean;
    private kraut: boolean;

    constructor (private bun: string) {
    }

    addKetchUp() {
        this.ketchUp = true;
        return this;
    }

    addMustrad() {
        this.mustrad = true;
        return this; // return this object means reference to the object
    }

    addKraut() {
        this.kraut = true;
        return this;
    }

    bake() {
        console.log('im will be ready in 10 mins')
    }
}


const burger2 = new BurgerBuilder('wheat')


burger2.addKetchUp().addKraut().addMustrad().bake()