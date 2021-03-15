import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {
  Button,
  Poster,
  Text,
  Accordion,
  List,
  Modal,
  ErrorComponent,
} from '../../components';
import {
  Container,
  Header,
  Body,
  InformationContainer,
  ButtonContainer,
  EpisodeContainer,
  EpisodeTitle,
  Border,
  EpisodeLoading,
  ModalInformationContainer,
} from './ShowDetailScreenStyle';
import {ShowDetail} from '../../interfaces/show.types';
import {SystemIcons, Colors} from '../../constants/theme';
import {EpisodesActions, MyListActions} from '../../store/actions';
import {Episode, ShowEpisodes} from '../../interfaces/episode.types';

const cleanHTML = (text: string) => {
  const regex = /(<([^>]+)>)/gi;
  const result = text.replace(regex, '');
  return result;
};

interface ShowDetailScreenProps {
  myList: ShowDetail[] | [];
  dispatch: void;
  route: {
    params?: ShowDetail;
  };
  showEpisodes?: {
    error: any;
    data: ShowEpisodes;
  };
  loading?: boolean;
}

const ShowDetailScreen: React.FC<ShowDetailScreenProps> = (props) => {
  const {
    dispatch,
    route: {params: listItem},
    myList,
    showEpisodes,
    loading,
  } = props;
  console.log('showEpisodes', showEpisodes);
  const [inMyList, isInMyList] = useState<boolean>(false);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    dispatch(EpisodesActions.actions.listEpisodes(listItem.id));
  }, []);

  useEffect(() => {
    if (myList.find((item: ShowDetail) => item.id === listItem.id)) {
      isInMyList(true);
    } else {
      isInMyList(false);
    }
  }, [myList, listItem]);

  const {image, summary, name, schedule, genres} = listItem;

  return (
    <>
      <Modal
        visible={!!selectedEpisode}
        closeModal={() => {
          console.log('???');
          setSelectedEpisode(null);
        }}>
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
          <ModalInformationContainer>
            <Text preset="desc" color={Colors.Black}>
              {selectedEpisode?.name}
            </Text>
            <Text preset="desc" color={Colors.Black}>
              S {selectedEpisode?.season} EP {selectedEpisode?.number}
            </Text>
          </ModalInformationContainer>
        </Header>
        <Body>
          <Text preset="desc" color={Colors.Black}>
            {selectedEpisode
              ? selectedEpisode?.summary && cleanHTML(selectedEpisode?.summary)
              : ''}
          </Text>
        </Body>
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
          <Text preset="desc">
            {listItem.summary ? cleanHTML(summary) : '-'}
          </Text>
          <EpisodeContainer>
            <EpisodeTitle>
              <Border>
                <Text preset="semibold" style={{textAlign: 'center'}}>
                  Episodes
                </Text>
              </Border>
            </EpisodeTitle>
            {showEpisodes.error ? (
              <ErrorComponent />
            ) : (
              <FlatList
                data={
                  (showEpisodes &&
                    showEpisodes.data &&
                    showEpisodes.data.episodes) ||
                  []
                }
                ListFooterComponent={() => loading && <EpisodeLoading />}
                renderItem={(season) => {
                  return (
                    <Accordion title={`Season ${season.item[0].season}`}>
                      <List
                        type={'episode'}
                        list={season.item}
                        onPressItem={(item) => setSelectedEpisode(item)}
                      />
                    </Accordion>
                  );
                }}
              />
            )}
          </EpisodeContainer>
        </Body>
      </Container>
    </>
  );
};

export default connect((state) => ({
  loading: state.loading,
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
