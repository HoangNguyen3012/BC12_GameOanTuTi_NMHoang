const initialState = {
    // Default value
    gamerChoice: './img/bua.png',
    computerChoice: './img/bao.png',
    displayChoice: './img/bua.png',
    gamesWon: 0,
    gamesPlayed: 0,
}

const OanTuTiReducer = (state = initialState, { type, payload }) => {
    // bua > keo > bao > bua
    switch (type) {
        case 'gamerChoice': // display gamerChoice each turn
            return { ...state, gamerChoice: getDisplayChoice(payload) };
        case 'computerChoice': // display computerChoice each turn
            const randomIndex = Math.floor(Math.random() * 3) + 1;
            // console.log(randomIndex);
            return { ...state, computerChoice: getDisplayChoice(randomIndex) }
        case '':
            return {...state};
        default:
            break;
    }
    return state;
}

const getDisplayChoice = payload => {
    switch (payload) {
        case 1:
            return './img/bao.png';
        case 2:
            return './img/keo.png';
        case 3:
            return './img/bua.png';
        default:
            console.log('Choice error!')
            break;
    }
}

export default OanTuTiReducer;