import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/buble.css';
import DisplayChoice from './DisplayChoice';
import GameStats from './GameStats';
import { actGamerChoose, actComputerChoose } from '../assets/store/actions/OanTuTiAction'

class GameOanTuTi extends Component {
    render() {
        const { gamerChoose, computerChoose } = this.props;
        return (
            <div className="game-container text-center">
                {/* <h3>Rock, Paper, Scissors</h3> */}
                <div className="container-fluid pt-5">
                    <div className="row">
                        <div className="col-4" style={{ maxHeight: "50vh" }}>
                            <div className="speech-bubble">
                                <DisplayChoice displayFor = {this.props.gamerChoice}/>
                            </div>
                            <img src="./img/player.png" alt="" width="30%" />
                            <div className="row justify-content-around px-3">
                                <button className="col-3 btnChoose" onClick={() => gamerChoose(1)}>
                                    <img src="./img/bao.png" alt="" width="70%"/>
                                </button>
                                <button className="col-3 btnChoose" onClick={() => gamerChoose(2)}>
                                    <img src="./img/keo.png" alt="" width="70%"/>
                                </button>
                                <button className="col-3 btnChoose" onClick={() => gamerChoose(3)}>
                                    <img src="./img/bua.png" alt="" width="70%"/>
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <GameStats />
                            <button className="btn btn-success" onClick={() => computerChoose()}>Play!</button>
                        </div>
                        <div className="col-4">
                            <div className="speech-bubble">
                                <DisplayChoice displayFor = {this.props.computerChoice}/>
                            </div>
                            <img src="./img/playerComputer.png" alt="" width="30%" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    computerChoice: state.OanTuTiReducer.computerChoice,
    gamerChoice: state.OanTuTiReducer.gamerChoice,
})

const mapDispatchToProps = dispatch => ({
    gamerChoose: choice => {
        dispatch(actGamerChoose(choice));
    },

    computerChoose: () => {
        dispatch(actComputerChoose());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOanTuTi);