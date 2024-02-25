import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/theme';

const Input = ({placeholder, label, onChange, name, value}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{label}</Text>
      <TextInput
        style={[styles.inputContainer, isFocused ? styles.focused : {}]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.Black}
        onChange={onChange}
        name={name}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
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
    fontSize: FONTSIZE.size_16,
  },
  inputContainer: {
    backgroundColor: COLORS.Secondary,
    borderRadius: 10,
    color: COLORS.Black,
    paddingHorizontal: 16,
    borderColor: COLORS.BlackRGB10,
    borderWidth: 1,
    fontFamily: FONTFAMILY.poppins_medium,
  },

  focused: {
    borderColor: COLORS.Black,
  },
});
