import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY} from '../../theme/theme';

const Input = ({placeholder, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{label}</Text>
      <TextInput style={styles.inputContainer} placeholder={placeholder} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%',
  },
  textStyle: {
    color: COLORS.Black,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  inputContainer: {
    backgroundColor: COLORS.Secondary,
    padding: 10,
    borderRadius: 10,
    borderColor: COLORS.BlackRGB10,
    borderWidth: 1,
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
