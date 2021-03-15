import React, {useState, useEffect} from 'react';
import {View, TextInput, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {Colors, SystemIcons} from '../../constants/theme';
import {Icon, List, Text} from '../../components';
import {Container} from './SearchScreenStyle';
import {ShowsActions} from '../../store/actions';

interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  const {dispatch, searchList, loading} = props;

  const [searchText, setSearchText] = useState<string>('');
  useEffect(() => {
    searchText.length > 1 &&
      dispatch(ShowsActions.actions.searchShows(searchText));
  }, [searchText]);

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
          placeholder="Find something..."
          onChangeText={(text) => setSearchText(text)}
        />
        {/* <View
          style={{
            position: 'absolute',
            right: 0,
            top: 12,
            borderWidth: 1,
            borderColor: '#fff',
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableWithoutFeedback onPress={() => console.lot('???')}>
            <Icon source={SystemIcons.close} />
          </TouchableWithoutFeedback>
        </View> */}
      </View>
      <View style={{flex: 1, paddingVertical: 16}}>
        {!loading && searchList.length === 1 ? (
          <Text preset="title"> 0 results</Text>
        ) : (
          <List
            title={`${searchList.length} Results`}
            list={searchList}
            loading={loading}
          />
        )}
      </View>
    </Container>
  );
};

export default connect((state) => ({
  loading: state.loading,
  searchList: state.shows.searchList,
}))(SearchScreen);
