// observor pattern is the push based
// subscriber subscribe to the events so the broadcast by another object
// and its a one to many relationship

export interface Observor<T> {
    next: (value: T) => void;
    error?: null | undefined;
    complete?: () => void;
}

class BroadOb<T> {
    private subcribers: Observor<T>[] = [];

    constructor() { }

    subscribe(value: Observor<T>) {
        this.subcribers.push(value);
    }

    next(value: any) {
        for (let data of this.subcribers) {
            data.next(value);
        }
    }
}

const ds = new BroadOb<String>();

ds.subscribe({
    next: (value) => {
        console.log('first subscriber', value);
    },
});
ds.subscribe({
    next: (value) => {
        console.log('second subscriber', value);
    },
});
ds.subscribe({
    next: (value) => {
        console.log('third subscriber', value);
    },
});

ds.next('boardcasting to the');

ds.subscribe({
    next: (value) => {
        console.log('fouth subscriber', value);
    },
});

ds.next('new message');
