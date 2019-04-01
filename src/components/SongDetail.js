import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>select a song</div>;
  }

  return (
    <div>
      <h3>Current Song:</h3>
      <p>
        title: {song.title}
        <br />
        duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
