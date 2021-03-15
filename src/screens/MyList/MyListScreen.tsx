import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Text, Button, List} from '../../components';
import {SHOW_LIST} from '../../constants/mock';
import {SystemIcons} from '../../constants/theme';
import {Container} from '../Home/HomeScreenStyle';
import {ShowsActions} from '../../store/actions';

interface MyListScreenProps {}

const MyListScreen: React.FC<MyListScreenProps> = ({myList}) => {
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    // dispatch(ShowsActions.actions.getShowsList(page));
  }, [page]);

  const fetchMoreFunction = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <List title="My List" list={myList} />
    </Container>
  );
};

export default connect((state) => ({
  myList: state.myList,
}))(MyListScreen);
