import {combineReducers} from 'redux';

import myList from './MyList/reducer';
import shows from './Shows/reducer';
import loading from './Loading/reducer';
import showEpisodes from './Episodes/reducer';

const storeReducers = combineReducers({
  myList,
  shows,
  loading,
  showEpisodes,
});

export default storeReducers;
