import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "In The End", duration: "3:30" },
    { title: "Counting Stars", duration: "3:40" },
    { title: "Sunflower", duration: "2:50" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
