import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  pressed: {
    opacity: 0.82,
  },
});
