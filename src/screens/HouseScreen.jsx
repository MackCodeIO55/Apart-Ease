import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppHeader from '../components/ui/AppHeader';
import globalStyles from '../styles/globalStyle';

const HouseScreen = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <AppHeader
        name={'arrow-left'}
        header={'House Screen'}
        onPress={() => navigation.goBack()}
      />
      <Text>HouseScreen</Text>
    </View>
  );
};

export default HouseScreen;

const styles = StyleSheet.create({});
