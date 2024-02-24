import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import {COLORS, FONTFAMILY, SPACING} from '../../theme/theme';
import Toast from 'react-native-toast-message';

const Register = ({navigation}) => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(2);
  };
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
      {step === 1 && (
        <>
          <Input placeholder={'Enter your name'} label={'Name'} />
          <Input
            placeholder={'Enter your phone number'}
            label={'Phone number'}
          />
          <Input placeholder={'Enter your email'} label={'E-mail address'} />
          <Input placeholder={'Enter your password'} label={'Password'} />
        </>
      )}
      {step === 2 && (
        <>
          <Input placeholder={'Enter your Block'} label={'Block'} />
          <Input
            placeholder={'Enter your apartment name'}
            label={'Apartment name'}
          />
        </>
      )}
      <Button title={'Next'} full onPress={handleNext} />
      <TouchableOpacity
        style={styles.signUpContainer}
        onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.font}>Already have an account?</Text>
        <Text style={{color: 'black', fontFamily: FONTFAMILY.poppins_medium}}>
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
