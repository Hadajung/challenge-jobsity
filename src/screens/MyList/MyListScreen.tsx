import React from 'react';
import {connect} from 'react-redux';
import {List} from '../../components';
import {ShowDetail, Store} from '../../interfaces';
import {Container} from '../Home/HomeScreenStyle';

interface MyListScreenProps {
  myList: ShowDetail[];
  t: any;
}

const MyListScreen: React.FC<MyListScreenProps> = ({myList, t}) => {
  return (
    <Container>
      <List title={t('myList')} list={myList} type="show" />
    </Container>
  );
};

export default connect((state: Store) => ({
  myList: state.myList,
}))(MyListScreen);
