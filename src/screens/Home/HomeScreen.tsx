import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {List, ErrorComponent} from '../../components';
import {Container} from './HomeScreenStyle';
import {ShowsActions} from '../../store/actions';
import {ShowDetail, Store} from '../../interfaces';

interface HomeProps {
  allShows: {
    error: any;
    data: ShowDetail[];
  };
  loading?: boolean;
  dispatch: any;
  t: any;
}

const HomeScreen: React.FC<HomeProps> = (props) => {
  const {allShows, loading, dispatch, t} = props;
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    dispatch(ShowsActions.actions.getShowsList(page));
  }, [page, dispatch]);

  const fetchMoreFunction = () => {
    setPage(page + 1);
  };
  if (allShows.error) {
    return (
      <Container>
        <ErrorComponent message={t('error')} />
      </Container>
    );
  }
  return (
    <Container>
      <List
        title={t('explore')}
        loading={loading}
        list={allShows.data}
        fetchMore={() => !loading && fetchMoreFunction()}
        footerLoading
        type="show"
      />
    </Container>
  );
};

export default connect((state: Store) => ({
  allShows: state.shows.allShows,
  loading: state.loading,
}))(HomeScreen);
