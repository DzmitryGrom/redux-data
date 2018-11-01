import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello {this.props.user}</h2>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.userInfo.user
  }
}

export default connect(mapStateToProps)(App);
