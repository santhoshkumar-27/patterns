// iterator pattern means

// traverse through the collection of objects or items

const cart = ['apple', 'banana', 'orange'];

for (const item of cart) {
    console.log('item', item);
}


// define custom iterator pattern
// of range functions
function range(start, end, step = 1) {
    return {
        [Symbol.iterator]() {
            return this
        },
        next() {

            if (start < end) {
                start += step;

                return {
                    done: false,
                    value: start
                }
            }

            return {
                done: true,
                value: end
            }
        }
    }
}

for (const item of range(1, 5, 1)) {
    console.log('item', item);
}