// mediator pattern something like middle man or brokers
class Airplane {
    landing: boolean;
}

class Runway {
    clear: boolean;
}


const runway1 = new Runway();
const runway2 = new Runway();
const runway3 = new Runway();

const airplane1 = new Airplane();
const airplane2 = new Airplane();
const airplane3 = new Airplane();

// here its multiple class depended on each other its like a many to many relationship
// so we created a mediator in order to maintain

class Tower {
    clearForLanding(runway: Airplane, aiplane:Airplane) {
        if (runway.landing) {
            console.log('Plane is clear to land', aiplane)
        }
    }
}