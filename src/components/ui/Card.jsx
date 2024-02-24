import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, SPACING} from '../../theme/theme';

const Card = ({children, style}) => {
  return <View style={[styles.cardContainer, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.Secondary,
    borderRadius: BORDERRADIUS.radius_15,
    padding: SPACING.space_15,
    shadowColor: COLORS.Black,
    shadowOpacity: 0.1,
  },
});
