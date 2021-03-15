import {ShowDetail} from '../interfaces';
import {AXIOSBASE} from './index';

export const fetchShowsWithePage = (page: number = 0) => {
  return AXIOSBASE.get<ShowDetail[]>(`shows?page=${page}`);
};
