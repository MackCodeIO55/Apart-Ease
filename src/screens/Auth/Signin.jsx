import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import {COLORS, FONTFAMILY, SPACING} from '../../theme/theme';
import Toast from 'react-native-toast-message';

const Signin = ({navigation}) => {
  const handleSignIn = () => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Sign in successfully',
      visibilityTime: 2000,
    });
    // navigation.navigate('TabNavigator');
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
      <Input placeholder={'Enter your password'} label={'Password'} />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text
          style={{
            color: 'black',
            textAlign: 'right',
            fontFamily: FONTFAMILY.poppins_medium,
          }}>
          Forgot password?
        </Text>
      </TouchableOpacity>
      <Button title={'Sign in'} full onPress={handleSignIn} />

      <TouchableOpacity
        style={styles.signUpContainer}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.font}>Don't have an account?</Text>
        <Text style={{color: 'black', fontFamily: FONTFAMILY.poppins_medium}}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_24,
    backgroundColor: COLORS.White,
    fontFamily: FONTFAMILY.poppins_medium,
    gap: SPACING.space_20,
  },
  signUpContainer: {
    gap: SPACING.space_8,
    fontFamily: FONTFAMILY.poppins_medium,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  font: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
