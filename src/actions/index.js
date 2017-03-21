import * as app from './app'
import * as user from './user'
import * as users from './users'
import * as events from './events'
import * as navigation from './navigation'
import * as interests from './interests'
import * as invites from './invites'
import * as requests from './requests'
import * as search from './search'
import * as notifications from './notifications'
import * as payments from './payments'
import * as network from './network'
import * as startup from './startup'

export const appActions = app
export const userActions = user
export const usersActions = users
export const eventActions = events
export const navigationActions = navigation
export const interestActions = interests
export const inviteActions = invites
export const requestActions = requests
export const searchActions = search
export const notificationActions = notifications
export const paymentActions = payments
export const networkActions = network
export const startupActions = startup

const types = {
  DEEP_LINK_TAB: 'DEEP_LINK_TAB',

  EVENT_ADD_ERROR: 'EVENT_ADD_ERROR',
  EVENT_ADDED: 'EVENT_ADDED',
  EVENT_EDIT: 'EVENT_EDIT',
  EVENT_EDIT_ERROR: 'EVENT_EDIT_ERROR',
  EVENT_JOIN_ERROR: 'EVENT_JOIN_ERROR',
  EVENT_JOINED: 'EVENT_JOINED',
  EVENT_QUIT: 'EVENT_QUIT',
  EVENT_QUIT_ERROR: 'EVENT_QUIT_ERROR',
  EVENT_REMOVED: 'EVENT_REMOVED',

  EVENTS_LOAD_ALL: 'EVENTS_LOAD_ALL',
  EVENTS_LOADED: 'EVENTS_LOADED',

  FACEBOOK_EXTRA_DATA_ERROR: 'FACEBOOK_EXTRA_DATA_ERROR',
  FACEBOOK_EXTRA_DATA_SAVED: 'FACEBOOK_EXTRA_DATA_SAVED',
  FACEBOOK_USER_DATA: 'FACEBOOK_USER_DATA',
  FACEBOOK_USER_DATA_START: 'FACEBOOK_USER_DATA_START',
  FACEBOOK_USER_ERROR: 'FACEBOOK_USER_ERROR',

  FIREBASE_AUTH_INIT: 'FIREBASE_AUTH_INIT',

  FRIEND_REMOVE: 'FRIEND_REMOVE',
  FRIEND_REMOVE_ERROR: 'FRIEND_REMOVE_ERROR',
  FRIEND_REQUEST: 'FRIEND_REQUEST',
  FRIEND_REQUEST_ACCEPTED: 'FRIEND_REQUEST_ACCEPTED',
  FRIEND_REQUEST_ACCEPTED_ERROR: 'FRIEND_REQUEST_ACCEPTED_ERROR',
  FRIEND_REQUEST_DENIED: 'FRIEND_REQUEST_DENIED',
  FRIEND_REQUEST_DENIED_ERROR: 'FRIEND_REQUEST_DENIED_ERROR',
  FRIEND_REQUESTS_LOADED: 'FRIEND_REQUESTS_LOADED',

  INTERESTS_LOAD_ALL: 'INTERESTS_LOAD_ALL',

  INVITE_ADD_ERROR: 'INVITE_ADD_ERROR',
  INVITE_ADDED: 'INVITE_ADDED',
  INVITES_LOAD_ALL: 'INVITES_LOAD_ALL',
  INVITES_LOADED: 'INVITES_LOADED',

  NAV_CHANGE_TAB: 'NAV_CHANGE_TAB',
  NAV_HIDE_MENU: 'NAV_HIDE_MENU',
  NAV_POP: 'NAV_POP',
  NAV_PUSH: 'NAV_PUSH',
  NAV_RESET: 'NAV_RESET',
  NAV_SHOW_MENU: 'NAV_SHOW_MENU',

  NETWORK_CHANGE: 'NETWORK_CHANGE',
  NETWORK_DISMISS_ALERT: 'NETWORK_DISMISS_ALERT',

  NOTIFICATION_LOADED: 'NOTIFICATION_LOADED',
  NOTIFICATION_MARK_READ: 'NOTIFICATION_MARK_READ',
  NOTIFICATION_MARK_SEEN: 'NOTIFICATION_MARK_SEEN',
  NOTIFICATION_MARK_UNREAD: 'NOTIFICATION_MARK_UNREAD',
  NOTIFICATION_PUSH: 'NOTIFICATION_PUSH',
  NOTIFICATION_SCHEDULED: 'NOTIFICATION_SCHEDULED',

  PAYMENTS_ADD_CARD_ERROR: 'PAYMENTS_ADD_CARD_ERROR',
  PAYMENTS_ADD_CARD_START: 'PAYMENTS_ADD_CARD_START',
  PAYMENTS_ADD_CARD_SUCCESS: 'PAYMENTS_ADD_CARD_SUCCESS',
  PAYMENTS_DELETE_CARD_ERROR: 'PAYMENTS_DELETE_CARD_ERROR',
  PAYMENTS_DELETE_CARD_START: 'PAYMENTS_DELETE_CARD_START',
  PAYMENTS_DELETE_CARD_SUCCESS: 'PAYMENTS_DELETE_CARD_SUCCESS',
  PAYMENTS_ERROR_DISMISS: 'PAYMENTS_ERROR_DISMISS',
  PAYMENTS_GET_ACCOUNT_ERROR: 'PAYMENTS_GET_ACCOUNT_ERROR',
  PAYMENTS_GET_ACCOUNT_START: 'PAYMENTS_GET_ACCOUNT_START',
  PAYMENTS_GET_ACCOUNT_SUCCESS: 'PAYMENTS_GET_ACCOUNT_SUCCESS',
  PAYMENTS_GET_CARDS_ERROR: 'PAYMENTS_GET_CARDS_ERROR',
  PAYMENTS_GET_CARDS_START: 'PAYMENTS_GET_CARDS_START',
  PAYMENTS_GET_CARDS_SUCCESS: 'PAYMENTS_GET_CARDS_SUCCESS',
  PAYMENTS_GET_TRANSACTIONS_ERROR: 'PAYMENTS_GET_TRANSACTIONS_ERROR',
  PAYMENTS_GET_TRANSACTIONS_START: 'PAYMENTS_GET_TRANSACTIONS_START',
  PAYMENTS_GET_TRANSACTIONS_SUCCESS: 'PAYMENTS_GET_TRANSACTIONS_SUCCESS',
  PAYMENTS_PAY_ERROR: 'PAYMENTS_PAY_ERROR',
  PAYMENTS_PAY_START: 'PAYMENTS_PAY_START',
  PAYMENTS_PAY_SUCCESS: 'PAYMENTS_PAY_SUCCESS',
  PAYMENTS_UPDATE_ACCOUNT_ERROR: 'PAYMENTS_UPDATE_ACCOUNT_ERROR',
  PAYMENTS_UPDATE_ACCOUNT_START: 'PAYMENTS_UPDATE_ACCOUNT_START',
  PAYMENTS_UPDATE_ACCOUNT_SUCCESS: 'PAYMENTS_UPDATE_ACCOUNT_SUCCESS',

  REQUEST_ADD_ERROR: 'REQUEST_ADD_ERROR',
  REQUEST_ADDED: 'REQUEST_ADDED',
  REQUEST_DELETED: 'REQUEST_DELETED',
  REQUESTS_LOADED: 'REQUESTS_LOADED',

  SEARCH_END: 'SEARCH_END',
  SEARCH_GENERAL: 'SEARCH_GENERAL',
  SEARCH_NEARBY_END: 'SEARCH_NEARBY_END',
  SEARCH_USERS_END: 'SEARCH_USERS_END',

  SET_UI_MODE: 'SET_UI_MODE',

  STARTUP_BEGIN: 'STARTUP_BEGIN',
  STARTUP_COMPLETE: 'STARTUP_COMPLETE',

  USER_CHANGE: 'USER_CHANGE',
  USER_DATA_FIRST_LOAD: 'USER_DATA_FIRST_LOAD',
  USER_LOGGED_OUT: 'USER_LOGGED_OUT',
  USER_SET_AVAILABILITY: 'USER_SET_AVAILABILITY',
  USER_SIGN_IN: 'USER_SIGN_IN',
  USER_SIGN_IN_FAILURE: 'USER_SIGN_IN_FAILURE',
  USER_SIGN_IN_FORM_EDIT: 'USER_SIGN_IN_FORM_EDIT',
  USER_SIGN_IN_SUCCESS: 'USER_SIGN_IN_SUCCESS',

  USER_SIGN_UP: 'USER_SIGN_UP',
  USER_SIGN_UP_FAILURE: 'USER_SIGN_UP_FAILURE',

  USERS_LOAD: 'USERS_LOAD',
  USERS_LOAD_ALL: 'USERS_LOAD_ALL',
  USERS_LOADED: 'USERS_LOADED',
}

export default types
