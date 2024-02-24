import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import {COLORS, FONTFAMILY, SPACING} from '../../theme/theme';
import Toast from 'react-native-toast-message';

const ResetPassword = ({navigation}) => {
  const handleSignIn = () => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Password reset successfully',
      visibilityTime: 2000,
    });
  };
  return (
    <View style={styles.container}>
      <Image
        style={{
          display: 'flex',
          alignSelf: 'center',
        }}
        source={require('../../assets/image/login.png')}
      />
      <Input placeholder={'Enter your email'} label={'E-mail address'} />
      <Input placeholder={'Enter new password'} label={'Password'} />

      <Button title={'Submit'} full onPress={handleSignIn} />
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_24,
    backgroundColor: COLORS.White,
    fontFamily: FONTFAMILY.poppins_medium,
    gap: SPACING.space_20,
  },
});
