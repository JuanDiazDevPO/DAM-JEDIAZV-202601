import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';

export default StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.label,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 6,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: colors.black,
    minHeight: 90,
  },
});
