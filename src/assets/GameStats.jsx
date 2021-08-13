import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameStats extends Component {
    render() {
        return (
            <div>
                <h3>Rock, Paper, Scissors</h3>
                <h4>Games won: {this.props.gamesWon}</h4>
                <h4>Games played: {this.props.gamesPlayed}</h4>
                {/* <button className="btn btn-success">Play!</button> */}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    gamesWon: state.OanTuTiReducer.gamesWon,
    gamesPlayed: state.OanTuTiReducer.gamesPlayed,
})

export default connect(mapStateToProps)(GameStats);