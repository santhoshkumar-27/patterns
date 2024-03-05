var Settings = /** @class */ (function () {
    // prevent the instance to be created of outside of class
    function Settings() {
    }
    Settings.getInstance = function () {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    };
    return Settings;
}());
// const settings = new Settings();
var setting = Settings.getInstance();
console.log('settings', setting);
