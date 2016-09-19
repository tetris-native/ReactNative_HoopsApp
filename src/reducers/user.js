import {handleActions} from 'redux-actions';

const initialState = {
  uid: null,

  personal: {
    name: null,
    username: null,
    gender: null,
    dob: null,
  },

  availability: true,

  organizer: [], //Events that this user organizes
  participant: [], //Events that this user participates in

  friends: [],

  //Signing in
  isSigningIn: false,
  signInError: null,

  //Signing up
  isSigningUp: false,
  signUpError: null,

  mode: null,
};

export default handleActions({

  FIREBASE_AUTH_INIT: (state, action) => {
    return {
      ...state,
      uid: action.uid,
    };
  },

  USER_SIGN_IN: (state, action) => {
    return {
      ...state,
      isSigningIn: true,
    };
  },

  USER_SIGN_IN_SUCCESS: (state, action) => {
    let extra = action.extra || {};
    return {
      ...state,
      uid: action.uid,
      personal: {
        email: extra.email,
        name: extra.name,
        username: extra.username,
        dob: extra.dob,
        gender: extra.gender,
      },
      isSigningIn: false,
      signInError: null,
    };
  },

  USER_SIGN_IN_FAILURE: (state, action) => {
    return {
      ...state,
      uid: null,
      name: null,
      username: null,
      personal: {},

      isSigningIn: false,
      signInError: action.err,
    };
  },

  USER_SIGN_UP: (state, action) => {
    return {
      ...state,
      isSigningUp: true,
    };
  },

  USER_SIGN_UP_SUCCESS: (state, action) => {
    return {
      ...state,
      uid: action.uid,
      isSigningUp: false,
      signUpError: null,
    };
  },

  USER_SIGN_UP_FAILURE: (state, action) => {
    return {
      ...state,
      uid: false,
      isSigningUp: false,
      signUpError: action.err,
    };
  },

  USER_LOGGED_OUT: (state, action) => {
    return initialState;
  },

  SET_UI_MODE: (state, action) => {
    return {
      ...state,
      mode: action.mode,
    };
  },

  USER_SET_AVAILABILITY: (state, action) => {
    return {
      ...state,
      availability: action.value,
    };
  },

  EVENT_ADD_ORGANIZER: (state, action) => {
    let organizer = state.organizer.slice(0);
    if(organizer.indexOf(action.id) === -1){
      organizer.push(action.id);
    }
    return {
      ...state,
      organizer,
    };
  },

  EVENT_REMOVE_ORGANIZER: (state, action) => {
    let organizer = state.organizer.slice(0);
    return {
      ...state,
      organizer: organizer.filter(eventId => eventId !== action.id),
    };
  },

  EVENT_ADD_PARTICIPANT: (state, action) => {
    let participant = state.participant.slice(0);
    if(participant.indexOf(action.id) === -1){
      participant.push(action.id);
    }
    return {
      ...state,
      participant,
    };
  },

  EVENT_REMOVE_PARTICIPANT: (state, action) => {
    let participant = state.participant.slice(0);
    return {
      ...state,
      participant: participant.filter(eventId => eventId !== action.id),
    };
  },

  USER_ADD_FRIEND: (state, action) => {
    let friends = state.friends.slice(0);
    if(friends.indexOf(action.id) === -1){
      friends.push(action.id);
    }
    return {
      ...state,
      friends,
    };
  },

  USER_REMOVE_FRIEND: (state, action) => {
    let friends = state.friends.slice(0);
    return {
      ...state,
      friends: friends.filter(friendId => friendId !== action.id),
    };
  },


}, initialState);