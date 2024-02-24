import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BORDERRADIUS, FONTFAMILY} from '../../theme/theme';

const Button = ({onPress, title, buttonStyle, textStyle, full}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, full && styles.fullWidth, buttonStyle]}>
      <Text style={[styles.text, textStyle, full && styles.centerText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E1D2E',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: BORDERRADIUS.radius_15,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: FONTFAMILY.poppins_medium,
    textAlign: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  centerText: {
    textAlign: 'center',
  },
});

export default Button;
