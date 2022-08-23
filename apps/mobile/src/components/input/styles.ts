import { StyleSheet } from 'react-native';
// import { fonts } from '../../lib/fonts';

export default StyleSheet.create({
  input: {
    padding: 0,
    color: '#333333',
    // fontFamily: fonts.avertaRegular,
    fontSize: 16,
    lineHeight: 18,
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#F7F7F7',
    // paddingLeft: 16,
    height: 48,
    position: 'relative',
  },
  container: {
    marginTop: 24,
    marginBottom: 4,
  },
  containerWithError: {
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 8,
  },
  labelStyle: {
    fontSize: 12,
    lineHeight: 18,
    // fontFamily: fonts.avertaSemiBold,
    color: '#262626',
    marginBottom: 4,
  },
  iconbutton: {
    position: 'absolute',
    right: 10,
    top: 4,
  },
  errorMessage: {
    marginTop: 2,
    // fontFamily: fonts.avertaRegular,
    fontSize: 12,
    color: '#DC4437',
  },
});
