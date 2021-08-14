import * as OanTuTiConst from '../constants/OanTuTiConstant';

export const actGamerChoose = choice => ({
    type: OanTuTiConst.gamerChoice,
    payload: choice,
})

export const actComputerChoose = () => ({
    type:OanTuTiConst.computerChoice,
})