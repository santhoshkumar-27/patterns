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