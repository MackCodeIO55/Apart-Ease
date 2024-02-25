import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppHeader from '../components/ui/AppHeader';
import globalStyles from '../styles/globalStyle';

const UserAccount = () => {
  return (
    <View style={globalStyles.container}>
      <AppHeader
        name={'arrow-left'}
        header={'User Screen'}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default UserAccount;

const styles = StyleSheet.create({});
