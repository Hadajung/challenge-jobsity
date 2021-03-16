import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {FlatList, ScrollView} from 'react-native';
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
import {SystemIcons, Colors, SystemImages} from '../../constants/theme';
import {EpisodesActions, MyListActions} from '../../store/actions';
import {Episode, ShowEpisodes} from '../../interfaces/episode.types';
import {Store} from '../../interfaces';

export const cleanHTML = (text: string) => {
  const regex = /(<([^>]+)>)/gi;
  const result = text.replace(regex, '');
  return result;
};

interface ShowDetailScreenProps {
  myList: ShowDetail[] | [];
  dispatch: any;
  route: {
    params: ShowDetail;
  };
  showEpisodes?: {
    error: any;
    data: ShowEpisodes;
  };
  loading?: boolean;
  t: any;
}

const ShowDetailScreen: React.FC<ShowDetailScreenProps> = (props) => {
  const {
    dispatch,
    route: {params: listItem},
    myList,
    showEpisodes,
    loading,
    t,
  } = props;
  const [inMyList, isInMyList] = useState<boolean>(false);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    dispatch(EpisodesActions.actions.listEpisodes(listItem.id));
  }, [dispatch, listItem]);

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
        closeModal={() => setSelectedEpisode(null)}>
        <ScrollView>
          <Header>
            <Poster
              source={
                (selectedEpisode &&
                  selectedEpisode.image &&
                  selectedEpisode?.image.medium && {
                    uri: selectedEpisode.image.medium,
                  }) ||
                SystemImages.preview
              }
              height={60}
              width="30%"
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
                ? selectedEpisode?.summary &&
                  cleanHTML(selectedEpisode?.summary)
                : ''}
            </Text>
          </Body>
        </ScrollView>
      </Modal>
      <Container showsVerticalScrollIndicator={false}>
        <Header>
          <Poster
            width="30%"
            source={
              (image &&
                image.medium && {
                  uri: image.medium,
                }) ||
              SystemImages.preview
            }
          />
          <InformationContainer>
            <Text preset="desc">{name}</Text>
            <Text preset="desc">
              {schedule.time} {schedule.days && schedule.days.join()}
            </Text>
            <Text preset="desc">{genres && genres.join()}</Text>
            <ButtonContainer>
              <Button
                title={t('myList')}
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
          <Text preset="desc">{summary ? cleanHTML(summary) : '-'}</Text>
          <EpisodeContainer>
            <EpisodeTitle>
              <Border>
                <Text preset="semibold" style={{textAlign: 'center'}}>
                  {t('episodes')}
                </Text>
              </Border>
            </EpisodeTitle>
            {showEpisodes && showEpisodes.error ? (
              <ErrorComponent message={t('error')} />
            ) : (
              <FlatList
                data={
                  (showEpisodes &&
                    showEpisodes.data &&
                    showEpisodes.data.episodes) ||
                  []
                }
                ListFooterComponent={() =>
                  loading ? <EpisodeLoading /> : null
                }
                renderItem={({item}) => {
                  return (
                    <Accordion title={`Season ${item[0].season}`}>
                      <List
                        type={'episode'}
                        list={item}
                        onPressItem={(episode) => setSelectedEpisode(episode)}
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

export default connect((state: Store) => ({
  loading: state.loading,
  myList: state.myList,
  showEpisodes: state.showEpisodes,
}))(ShowDetailScreen);

ShowDetailScreen.defaultProps = {
  route: {
    params: {
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
      _links: null,
    },
  },
};
