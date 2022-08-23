import { StyleSheet } from 'react-native';
import colors from '../../lib/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    minHeight: '100%',
  },
  viewContainer: {
    paddingHorizontal: 24,
    minHeight: '100%',
    paddingBottom: 100,
  },
  logoContainer: {
    paddingVertical: 32,
  },
  title: {
    marginTop: 'auto',
    color: colors.white,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 8,
    // fontFamily: fonts.avertaBold,
  },
  subtitle: {
    color: '#f2f2f2',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    // fontFamily: fonts.avertaRegular,
  },
  authForm: {},
  signupLink: {
    display: 'flex',
    flexDirection: 'row',
  },
  signupLinkPreText: {
    color: '#333333',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 24,
    // fontFamily: fonts.avertaRegular,
    marginRight: 2,
  },
  signupLinkLink: {
    color: colors.info,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 24,
    // fontFamily: fonts.avertaRegular,
    marginRight: 2,
  },
  apiErrorText: {
    marginTop: 8,
    // fontFamily: fonts.avertaRegular,
    fontSize: 14,
    color: '#DC4437',
  },
});
