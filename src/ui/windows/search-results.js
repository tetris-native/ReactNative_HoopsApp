
import _ from '../i18n';
import React from 'react';
import {View, ScrollView} from 'react-native';

import {
  EventListItem,
  Header,
} from '../components';

import StyleSheet from '../styles';

export default class SearchResults extends React.Component {

  render() {
    return (
      <View>
        <Header
          mode={this.props.mode}
          title={_('searchResults')}
          onClose={this.props.onClose}
        />

        <ScrollView contentContainerStyle={StyleSheet.container}>
          {this.props.events.map(event =>
            <EventListItem
              key={event.id}
              onPress={() => this.props.onPressEvent(event)}
              image={{uri: event.imageSrc}}
              title={event.title}
              players={event.players} maxPlayers={event.maxPlayers}
              level={event.level}
              venue={event.venue}
              date={event.date}
              distance={event.distance}
            />
          )}
        </ScrollView>

      </View>
    );
  }
}