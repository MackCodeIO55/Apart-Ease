import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppHeader from '../components/ui/AppHeader';
import globalStyles from '../styles/globalStyle';

const CommunityScreen = () => {
  return (
    <View style={globalStyles.container}>
      <AppHeader
        name={'arrow-left'}
        header={'Community Screen'}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({});
