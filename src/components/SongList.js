import React, { Component } from 'react';
import { connect } from 'react-redux';
//named export 
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary"
            onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    })
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

//conventional name for this function
const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
