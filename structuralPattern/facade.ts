/*
    Facade is face of building only to view, no need to view lower level,
    Example like:
        Just like the compare with real life like, banking system
        you put or take money,
        but you don't know the process of what they doing
*/

abstract class ApplicationOperation {

    abstract turnOff(): void;

    abstract turnOn(): void;
}

class PlumbingSystem implements ApplicationOperation {
    // low level access to the plumbing system
    setPressure(v: number) { }
    turnOff(): void {
        
    }
    turnOn(): void {
        
    }
}
// just like the plumbing systems
class ElectricalSystem  implements ApplicationOperation {
    // low level access to the Electrical system
    setVoltage(v: number) { }
    turnOff() { }
    turnOn() { }
}


// now we are hiding the complex logic is here
class House {
    private plumbing = new PlumbingSystem();
    private electrical = new ElectricalSystem();

    turnOnAllAppliance() {
        this.plumbing.setPressure(320);
        this.plumbing.turnOn();
        this.electrical.setVoltage(320);
        this.electrical.turnOn();
    }

    turnOff() {
        this.electrical.turnOff();
        this.plumbing.turnOff();
    }
}

// only showing essential items to the customers
// but hidding the complexing logic
const client = new House();
client.turnOnAllAppliance();
client.turnOff();