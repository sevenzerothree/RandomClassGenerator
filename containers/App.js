import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import '../content/sass/app.scss';

import { fetchRandomClass } from '../actions'
import RandomClass from '../components/RandomClass';
import ReRollButton from '../components/ReRollButton';

class App extends Component {

    constructor(props) {
        super(props);
        this.handleRollClick = this.handleRollClick.bind(this);
    }

    componentDidMount() {
        const dispatch = this.props.dispatch;
        dispatch(fetchRandomClass());
    }

    handleRollClick(e) {
        e.preventDefault();

        alert('hi');
        // const dispatch = this.props.dispatch;
        // dispatch(fetchRandomClass());
    }

    render() {
        const { isProcessing, randomClass } = this.props
        return (
            <div className="test">
                <ReRollButton onClick={this.handleRollClick} />
                { isProcessing &&
                    <h3>Processing</h3>
                }
                <h1>Generated Class</h1>
                { randomClass &&
                    <RandomClass randomClass={randomClass} />
                }
            </div>
        )
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    randomClass: PropTypes.object.isRequired,
    isProcessing: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        isProcessing: state.randomClasses.isProcessing,
        randomClass: state.randomClasses.randomClass
    }
}

export default connect(mapStateToProps)(App);
