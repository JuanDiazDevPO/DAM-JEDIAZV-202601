import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 32,
    paddingTop: 48,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 36,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.black,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: colors.subtitleText,
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
});
