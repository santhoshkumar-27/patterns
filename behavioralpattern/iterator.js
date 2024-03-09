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
            let result = { done: start > end };
            if (!result.done) {
                result.value = start;
                start += step;
            }
            return result;
        }
    }
}

// and its pull based get value from that functions
for (const item of range(1, 5, 1)) {
    console.log('item', item);
}