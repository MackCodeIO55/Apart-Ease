import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import {COLORS, FONTFAMILY, SPACING} from '../../theme/theme';
import Toast from 'react-native-toast-message';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [gotOtp, setGotOtp] = useState(false);

  const handleSignIn = () => {
    setGotOtp(true);
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'OTP sent successfully',
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
      {gotOtp && <Input placeholder={'Enter OTP'} label={'OTP'} />}
      <Button
        title={`${gotOtp ? 'Verify' : 'Generate OTP'}`}
        full
        onPress={handleSignIn}
      />
    </View>
  );
};

export default ForgotPassword;

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
