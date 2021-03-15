import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {FlatList, Modal} from 'react-native';
import {Button, Poster, Text, Accordion, List} from '../../components';
import {
  Container,
  Header,
  Body,
  InformationContainer,
  ButtonContainer,
  EpisodeContainer,
  EpisodeTitle,
  Border,
} from './ShowDetailScreenStyle';
import {ShowDetail} from '../../components/org.list/ListComponent';
import {SystemIcons, Colors} from '../../constants/theme';
import {SHOW_LIST} from '../../constants/mock';
import {EpisodesActions, MyListActions} from '../../store/actions';
import {Episode} from '../../interfaces/episode.types';

const cleanHTML = (text: string) => {
  const regex = /(<([^>]+)>)/gi;
  const result = text.replace(regex, '');
  return result;
};

const ShowDetailScreen: React.FC<ShowDetail> = (props) => {
  console.log(props);
  const {
    dispatch,
    route: {params: listItem},
    myList,
    showEpisodes,
  } = props;
  const [inMyList, isInMyList] = useState<boolean>(false);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  console.log('showEpisodes', selectedEpisode);

  useEffect(() => {
    dispatch(EpisodesActions.actions.listEpisodes(listItem.id));
  }, []);

  useEffect(() => {
    if (myList.find((item) => item.id === listItem.id)) {
      isInMyList(true);
    } else {
      isInMyList(false);
    }
  }, [myList]);

  const {image, summary, name, schedule, genres} = listItem;

  return (
    <>
      <Modal visible={!!selectedEpisode} transparent>
        {/* <ModalOverlay /> */}
        <Container>
          <Header>
            <Poster
              source={
                selectedEpisode &&
                selectedEpisode.image &&
                selectedEpisode?.image.medium && {
                  uri: selectedEpisode.image.medium,
                }
              }
            />
            <InformationContainer>
              <Text preset="desc">{selectedEpisode?.name}</Text>
              <Text preset="desc">
                S {selectedEpisode?.season} EP {selectedEpisode?.number}
              </Text>
              {/* <Text preset="desc">{genres.join()}</Text> */}
            </InformationContainer>
          </Header>

          <Body>
            <Text preset="desc">
              {cleanHTML(selectedEpisode?.summary || '')}
            </Text>
          </Body>
        </Container>
      </Modal>
      <Container showsVerticalScrollIndicator={false}>
        <Header>
          <Poster
            source={
              image &&
              image.medium && {
                uri: image.medium,
              }
            }
          />
          <InformationContainer>
            <Text preset="desc">{name}</Text>
            <Text preset="desc">
              {schedule.time} {schedule.days.join()}
            </Text>
            <Text preset="desc">{genres.join()}</Text>
            <ButtonContainer>
              <Button
                title="My List"
                icon={SystemIcons.heart}
                tintColor={inMyList ? Colors.Red : Colors.White}
                onPress={() =>
                  !inMyList
                    ? dispatch(MyListActions.actions.addToMyList(listItem))
                    : dispatch(
                        MyListActions.actions.removeFromMyList({
                          id: listItem.id,
                        }),
                      )
                }
              />
            </ButtonContainer>
          </InformationContainer>
        </Header>
        <Body>
          <Text preset="desc">{cleanHTML(summary)}</Text>
          <EpisodeContainer>
            <EpisodeTitle>
              <Border>
                <Text preset="bold" style={{textAlign: 'center'}}>
                  Episodes
                </Text>
              </Border>
            </EpisodeTitle>
            {/* <View style={{flex: 1}}> */}
            <FlatList
              // contentContainerStyle={{flex: 1}}
              data={showEpisodes.episodes}
              renderItem={(season) => {
                return (
                  <Accordion title={`Season ${season.item[0].season}`}>
                    <List
                      list={season.item}
                      onPressItem={(item) => setSelectedEpisode(item)}
                    />
                  </Accordion>
                );
              }}
            />
            {/* </View> */}
          </EpisodeContainer>
        </Body>
      </Container>
    </>
  );
};

export default connect((state) => ({
  myList: state.myList,
  showEpisodes: state.showEpisodes,
}))(ShowDetailScreen);

ShowDetailScreen.defaultProps = {
  id: 0,
  url: '-',
  name: '-',
  type: '-',
  genres: [],
  status: '-',
  runtime: 0,
  premeired: '-',
  officialSite: '-',
  schedule: {
    time: '-',
    days: [],
  },
  rating: {
    average: 0,
  },
  image: null,
  summary: '-',
  updated: 0,
};
