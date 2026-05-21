import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    width: '100%',
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.black,
    letterSpacing: 0.3,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  productName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 2,
  },
  stockText: {
    fontSize: 13,
    color: colors.subtitleText,
    marginBottom: 18,
  },
  input: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    paddingVertical: 11,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.subtitleText,
    letterSpacing: 0.5,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderRadius: 6,
    paddingVertical: 11,
    alignItems: 'center',
  },
  confirmText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: 0.5,
  },
});
