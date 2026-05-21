import { StyleSheet } from 'react-native';
import { colors } from '../../themes/colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 18,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.black,
    lineHeight: 34,
  },
  logoutButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    marginTop: 4,
  },
  logoutText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.subtitleText,
    letterSpacing: 0.4,
  },
  newProductButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newProductText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 6,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.black,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 10,
  },
  list: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    gap: 10,
  },
  empty: {
    alignItems: 'center',
    paddingTop: 60,
  },
  emptyText: {
    fontSize: 15,
    color: colors.subtitleText,
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 13,
    color: colors.placeholder,
  },
});
