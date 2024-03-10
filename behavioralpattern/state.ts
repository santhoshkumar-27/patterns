// Object behaves differently based on finite number of states


// before state maintained
class Human {
    think(mood: string) {
        switch (mood) {
            case 'happy':
                return 'I am happy';
            case 'sad':
                return 'I am sad';
            default:
                return 'I am okay';
        }
    }
}


interface State {
    think(): string;
}

class HappyState implements State {
    think(): string {
        return 'I am happy';
    }
}

class SadState implements State {
    think(): string {
        return 'I am Sad';
    }
}


class NormalState implements State {
    think(): string {
        return 'I am normal';
    }
}


class HumanBeing {
    state: State;

    constructor() {
        this.state = new HappyState();
    }

    think() {
        console.log(this.state.think())
    }


    changeState(state: State) {
        this.state = state;
    }
}