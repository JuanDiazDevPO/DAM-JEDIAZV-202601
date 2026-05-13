import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 6,
    marginTop: -4,
  },
  forgotText: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  signUpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 13,
    color: colors.subtitleText,
  },
  signUpLink: {
    fontSize: 13,
    color: colors.secondary,
    fontWeight: '700',
  },
});
