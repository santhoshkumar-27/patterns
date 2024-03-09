// proxy is like a substitue for a anything
/*
    but in the programming the there is proxy for the real object
    you replace target object with the proxy object
*/


const data = {
    key: 'string',
    value: 'number'
}


// its in the vue js
// reactive system in the vue.js intercept data and updated the UI changes, using the proxy of data
// when ever the data changes, with substitue of data
const proxer = new Proxy(data, {
    get(target, key) {
        // get the value from the key
        return target[key];
    },
    set(target, key, value) { // set to use to re-render the ui
        console.log('updated the ui')
        return Reflect.set(target, key, value) // and update to original data
    }
})


proxer.key // string

proxer.value = 2 // during setting we updated the re-render