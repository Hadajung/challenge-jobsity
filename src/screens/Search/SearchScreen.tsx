import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {Colors, SystemIcons} from '../../constants/theme';
import {ErrorComponent, Icon, List, Text} from '../../components';
import {Container} from './SearchScreenStyle';
import {ShowsActions} from '../../store/actions';
import {ShowDetail, Store} from '../../interfaces';

interface SearchScreenProps {
  searchList: {
    error: any;
    data: ShowDetail[];
  };
  loading?: boolean;
  dispatch: any;
  t: any;
}

const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  const {dispatch, searchList, loading, t} = props;

  const [searchText, setSearchText] = useState<string>('');
  useEffect(() => {
    if (searchText.length > 1) {
      dispatch(ShowsActions.actions.searchShows(searchText));
    }
    if (searchText.length === 0) {
      dispatch(ShowsActions.actions.setSearchShowsList([]));
    }
  }, [searchText, dispatch]);
  if (searchList.error) {
    return (
      <Container>
        <ErrorComponent message={t('error')} />
      </Container>
    );
  }
  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          padding: 12,
          borderBottomWidth: 1,
          borderColor: Colors.White,
        }}>
        <Icon source={SystemIcons.search} />
        <TextInput
          autoFocus
          style={{
            color: Colors.White,
            marginLeft: 16,
            fontSize: 14,
            width: '80%',
          }}
          placeholder={t('searchPlaceholder')}
          onChangeText={(text) => setSearchText(text)}
          autoCorrect={false}
        />
      </View>
      <View style={{flex: 1, paddingVertical: 16}}>
        {!loading && searchList.data && searchList.data.length === 1 ? (
          <Text preset="title"> 0 {t('results')}</Text>
        ) : (
          <List
            title={`${searchList.data && searchList.data.length} ${t(
              'results',
            )}`}
            list={searchList.data}
            loading={loading}
            type="show"
          />
        )}
      </View>
    </Container>
  );
};

export default connect((state: Store) => ({
  loading: state.loading,
  searchList: state.shows.searchList,
}))(SearchScreen);
