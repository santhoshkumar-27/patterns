/*
    Instead of creating new keyword for creating object, this will be done
    by the method or functions
*/


// non - factory

class IoSButton {
    // some thing
}


class AndroidButton {
    // some thing
}

const os = 'ios'

const button1 = os === 'ios' ? new IoSButton : new AndroidButton;
const button2 = os === 'ios' ? new IoSButton : new AndroidButton;


// Factory button
class ButtonFactory {
    createButton(os: string):IoSButton | AndroidButton {
        if (os === 'ios') {
            return  new IoSButton
        }

        return new AndroidButton
    }
}

const bFactory = new ButtonFactory();

const button3 = bFactory.createButton(os);
const button4 = bFactory.createButton(os);
// smart object creation