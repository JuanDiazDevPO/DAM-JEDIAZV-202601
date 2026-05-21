import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 2,
  },
  sku: {
    fontSize: 12,
    color: colors.subtitleText,
    marginBottom: 1,
  },
  stock: {
    fontSize: 12,
    color: colors.subtitleText,
    marginBottom: 1,
  },
  ganancia: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 2,
  },
  sellButton: {
    backgroundColor: colors.secondary,
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 9,
    marginLeft: 14,
  },
  sellButtonDisabled: {
    backgroundColor: '#D1D5DB',
  },
  sellButtonText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
});
