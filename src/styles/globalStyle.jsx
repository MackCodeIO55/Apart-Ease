import {StyleSheet} from 'react-native';
import {COLORS, FONTFAMILY, SPACING} from '../theme/theme';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: COLORS.White,
    paddingHorizontal: SPACING.space_12,
  },
  fontStyle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.Black,
  },
});

export default globalStyles;
