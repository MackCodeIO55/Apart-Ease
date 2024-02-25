import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/theme';

const InputOTP = ({label}) => {
  const inputs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const focusNextInput = index => {
    if (inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const handleInputChange = (text, index) => {
    if (text.length === 1) {
      focusNextInput(index);
    }
  };

  const handleFocus = index => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  return (
    <View>
      <Text style={styles.textStyle}>{label}</Text>
      <View style={styles.container}>
        {[0, 1, 2, 3].map(i => (
          <TextInput
            key={i}
            ref={input => (inputs.current[i] = input)}
            style={[
              styles.inputContainer,
              focusedIndex === i && styles.focused,
            ]}
            onChangeText={text => handleInputChange(text, i)}
            onFocus={() => handleFocus(i)}
            onBlur={handleBlur}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
    </View>
  );
};

export default InputOTP;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    width: '100%',
  },
  inputContainer: {
    backgroundColor: COLORS.Secondary,
    borderRadius: 10,
    color: COLORS.Black,
    paddingHorizontal: 16,
    borderColor: COLORS.BlackRGB10,
    borderWidth: 1,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    textAlign: 'center',
  },
  focused: {
    borderColor: COLORS.Black,
  },
  textStyle: {
    color: COLORS.Black,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
  },
});
