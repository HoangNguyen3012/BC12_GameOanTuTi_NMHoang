const initialState = {
    // Default value
    gamerChoice: 'bua',
    computerChoice: 'bua',
    displayChoice: './img/bua.png',
    gamesWon: 0,
    gamesPlayed: 0,
}

const OanTuTiReducer = (state = initialState, { type, payload }) => {
    // bua > keo > bao > bua
    switch (type) {
        case 'gamerChoice':
            switch (payload) {
                case 1:
                    return { ...state, displayChoice: './img/bao.png' };
                case 2:
                    return { ...state, displayChoice: './img/keo.png' };
                case 3:
                    return { ...state, displayChoice: './img/bua.png' };
                default:
                    console.log('gamerChoice error!')
                    break;
            }
            break;

        default:
            break;
    }
    return state;
}

export default OanTuTiReducer;