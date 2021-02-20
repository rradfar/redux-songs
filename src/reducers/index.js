import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'All Star', duration: '3:15' },
    { title: 'I want it That Way', duration: '2:45' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'No Scrubs', duration: '4:05' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
