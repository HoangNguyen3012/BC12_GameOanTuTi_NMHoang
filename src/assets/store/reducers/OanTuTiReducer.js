import * as OanTuTiConst from '../constants/OanTuTiConstant';

const initialState = {
    // Default value
    gamerChoice: OanTuTiConst.imgKeo,
    computerChoice: OanTuTiConst.imgBao,
    gamesWon: 0,
    gamesPlayed: 0,
}

const OanTuTiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case OanTuTiConst.gamerChoice: // display gamerChoice each turn
            return { ...state, gamerChoice: getDisplayChoice(payload) };
        case OanTuTiConst.computerChoice: // display computerChoice each turn
            // Get a random choice
            const randomIndex = Math.floor(Math.random() * 3) + 1;

            // Apply random choice to display
            state.computerChoice = getDisplayChoice(randomIndex);

            // Play Rock Paper Scissors
            // bua > keo > bao > bua
            state.gamesPlayed += 1; // update gamesPlayed
            switch (state.gamerChoice) {
                // Only check winning condition
                case OanTuTiConst.imgBao:
                    if(state.computerChoice === OanTuTiConst.imgBua) {
                        state.gamesWon += 1;
                        console.log('Bao > Bua')
                    }
                    break;
                case OanTuTiConst.imgKeo:
                    if(state.computerChoice === OanTuTiConst.imgBao) {
                        state.gamesWon += 1;
                        console.log('Keo > Bao')
                    }
                    break;
                case OanTuTiConst.imgBua:
                    if(state.computerChoice === OanTuTiConst.imgKeo) {
                        state.gamesWon += 1;
                        console.log('Bua > Keo')
                    }
                    break;
                default:
                    console.log('Game not played')
                    break;
            }
            // Play Rock Paper Scissors ends
            // return { ...state}
            break;
        default:
            console.log('Something is wrong')
            break;
    }
    return {...state};
}

const getDisplayChoice = payload => {
    switch (payload) {
        case 1:
            return OanTuTiConst.imgBao;
        case 2:
            return OanTuTiConst.imgKeo;
        case 3:
            return OanTuTiConst.imgBua;
        default:
            console.log('Choice error!')
            break;
    }
}

export default OanTuTiReducer;