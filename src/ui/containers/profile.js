
import React from 'react';
import {connect} from 'react-redux';
import _Profile from '../windows/profile';
import {
  user as userActions,
  users as usersActions,
  navigation as navigationActions,
} from '../../actions';

class Profile extends React.Component {
  render() {
    let profile;
    if(this.props.id === this.props.user.uid) {
      profile = this.props.user;
      profile.id = this.props.user.uid; //Profile needs an id rather than a uid!
    }else{
      profile = this.props.users.usersById[this.props.id];
    }

    let eventIds = Object.keys(profile.organizing);
    let events = eventIds.map((eventId) => {
      return this.props.events.eventsById[eventId];
    }).filter(event => !!event);

    let isFriend = profile.id in this.props.user.friends;

    let isPending = !!Object.keys(this.props.user.friendRequests).map(requestId => {
      let request = this.props.notifications.friendRequestsById[requestId];
      if(request.status !== 'pending') {
        return;
      }

      if(this.props.user.uid === request.fromId) {
        return request.toId;
      } else if(this.props.user.uid === request.toId) {
        return request.fromId;
      }
    }).find(userId => {
      return userId === this.props.id;
    });

    let interests = Object.keys(profile.interests || {}).map(id => {
      return this.props.interests.interestsById[id];
    });

    return (
      <_Profile
        profile={profile}
        interests={interests}
        isFriend={isFriend}
        isPending={isPending}
        onPressAddFriend={() => this.props.sendFriendRequest(profile)}
        onPressRemoveFriend={() => this.props.removeFriend(profile)}
        onPressEditProfile={() => this.props.onNavigate('profileEdit')}
        me={this.props.user}
        upcoming={events}
        onChangeAvailability={this.props.onChangeAvailability}
      />
    );
  }
}

Profile.propTypes = {
  id: React.PropTypes.string.isRequired,
};

export default connect(
  (state) => ({
    user: state.user,
    users: state.users,
    events: state.events,
    notifications: state.notifications,
    interests: state.interests,
  }),
  (dispatch) => ({
    onNavigate: (key, props) => dispatch(navigationActions.push({key, props}, false)),
    onChangeAvailability: (value) => dispatch(userActions.setAvailability(value)),
    removeFriend: (user) => dispatch(userActions.removeFriend(user)),
    sendFriendRequest: (user) => dispatch(usersActions.sendFriendRequests([user.id])),
  }),
)(Profile);
