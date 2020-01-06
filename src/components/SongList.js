import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div>SongList</div>
  }
}

//conventional name for this function
const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);
