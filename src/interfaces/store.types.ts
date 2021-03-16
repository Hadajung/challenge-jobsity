import {Episode} from './episode.types';
import {ShowDetail} from './show.types';

export interface Store {
  loading?: boolean;
  shows: {
    allShows: {
      data: ShowDetail[];
      error: any;
    };
    searchList: {
      data: ShowDetail[];
      error: any;
    };
  };
  myList: ShowDetail[];
  showEpisodes: {
    data: {
      showId: number;
      episodes: Episode[][];
    };
    error: any;
  };
}
