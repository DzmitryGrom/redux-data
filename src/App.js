import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks'


class App extends Component {

  addTrack () {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = ''
  }

  findTrack () {
    this.props.onFindTrack(this.searchInput.value);
    this.searchInput.value = ''
  }
 
  render() {
    return (
      <div>
        <div>
          <input type="text" ref={(input) => {this.trackInput = input}} />
          <input type="button" value="add track" onClick={this.addTrack.bind(this)} />
        </div>
        <div>
          <input type="text" ref={(input) => {this.searchInput = input}} />
          <input type="button" value="find tracks" onClick={this.findTrack.bind(this)} />
        </div>
        <div>
        <input type="button" value="get tracks" onClick={this.props.onGetTracks} />
        </div>
        <ul>
          {this.props.tracks.map((track, index) => 
            <li key={index}>{track.name}</li>
          )}
        </ul>
      </div>
    )
  } 
}

export default connect(
  state =>({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
      onAddTrack: (name) => {
        const payload = {
          id: Date.now().toString(),
          name
        }
        dispatch({  type: 'ADD_TRACK', payload })
      },
      onFindTrack: (name) => {
        dispatch({  type: 'FIND_TRACK', payload: name })
      },
      onGetTracks: () => {
        dispatch(getTracks())
      }
  })
)(App);
