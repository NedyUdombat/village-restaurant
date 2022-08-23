import { StyleSheet } from 'react-native';
import colors from '../../lib/colors';

export default StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  avatar: {
    backgroundColor: colors.warning,
    width: 100,
    height: 100,
  },
  cardInfo: {
    justifyContent: 'center',
    paddingLeft: 8,
    fontWeight: 'bold',
    fontSize: 24,
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardButton: {
    marginTop: 8,
    backgroundColor: colors.transparent,
  },
});
