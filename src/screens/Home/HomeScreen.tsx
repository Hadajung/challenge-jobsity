import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Text, Button, List} from '../../components';
import {SHOW_LIST} from '../../constants/mock';
import {SystemIcons} from '../../constants/theme';
import {Container} from './HomeScreenStyle';
import {ShowsActions} from '../../store/actions';

interface HomeProps {}

const HomeScreen: React.FC<HomeProps> = ({
  navigation,
  allShows,
  loading,
  dispatch,
}) => {
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    dispatch(ShowsActions.actions.getShowsList(page));
  }, [page]);

  const fetchMoreFunction = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <List
        title="Explore..."
        loading={loading}
        list={allShows}
        fetchMore={() => !loading && fetchMoreFunction()}
        footerLoading
        type="show"
      />
    </Container>
  );
};

export default connect((state) => ({
  allShows: state.shows.allShows,
  loading: state.loading,
}))(HomeScreen);
