import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class DisplayChoice extends Component {
    render() {
        const { displayFor } = this.props;
        return (
            <div>
                <img src={displayFor} alt="" width="50%" />
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     displayChoice: state.OanTuTiReducer.displayChoice,
// });

// export default connect(mapStateToProps)(DisplayChoice);