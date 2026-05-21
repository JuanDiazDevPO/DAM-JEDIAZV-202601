import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    height: 46,
  },
  icon: {
    fontSize: 15,
    marginRight: 8,
    color: colors.placeholder,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.black,
    padding: 0,
  },
});
