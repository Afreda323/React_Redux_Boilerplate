import React, { Component } from 'react';
import {connect} from 'react-redux'
class App extends Component {
    render() {
        return (
            <div>
                <h1>HELLO w</h1>
            </div>
        );
    }
}

function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps)(App);