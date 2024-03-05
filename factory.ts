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