import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayChoice extends Component {
    render() {
        return (
            <div>
                <img src={this.props.displayChoice} alt="" width="50%" />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    displayChoice: state.OanTuTiReducer.displayChoice,
});

export default connect(mapStateToProps)(DisplayChoice);