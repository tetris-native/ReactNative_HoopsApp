
import {colors} from '../resources';

export default StyleSheet => StyleSheet.extend({

  menuContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },

  style: {
    position: 'absolute',
    right: -115,
    top: 0,
    bottom: 0,
    width: 115,
    backgroundColor: 'white'
  },

  menuOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(41,44,52,0.5)',
  },

  header: {
    height: 160,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },

  items: {
    paddingTop: 15,
  },

  avatarImage: {
    width: 70,
    height: 70,
    backgroundColor: colors.highlightBlack,
    borderRadius: 35,
    overflow: 'hidden'
  },

  avatarText: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 13,
    letterSpacing: 1,
    marginTop: 10,
    textAlign: 'center'
  },

  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },

  icon: {
    width: 24,
    height: 24,
  },

  itemText: {
    paddingTop: 5,
    fontSize: 12,
    color: colors.grey,
  },

  badge: {
    color: colors.white,
    backgroundColor: 'transparent',
    lineHeight: 11.5,
    fontSize: 11
  },

  badgeContainer: {
    position: 'absolute',
    backgroundColor: colors.pink,
    left: 12,
    top: -7,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

});