class Settings {
    // static gives ablitiy to call only after the class has been initiated
    static instance: Settings;

    dsasdf: 1;

    // prevent the instance to be created of outside of class
    private constructor()  {

    }


    static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings()
        }

        return Settings.instance;
    }
}


// const settings = new Settings();
const setting = Settings.getInstance();

console.log('settings', setting)