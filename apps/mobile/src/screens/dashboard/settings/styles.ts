import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    minHeight: '100%',
  },
  viewContainer: {
    paddingHorizontal: 24,
    minHeight: '100%',
    paddingTop: 24,
  },
  listContainer: {
    // paddingLeft: 24,
    marginVertical: 24,
  },
  listItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F5F6',
    height: 56,
    alignItems: 'center',
    paddingRight: 24,
  },
  listItemTitle: {
    marginRight: 'auto',
    marginLeft: 16,
    color: '#4D4D4D',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    // fontFamily: fonts.avertaRegular,
  },
});
