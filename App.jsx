import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigators/StackNavigation';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <StackNavigation />
        <Toast position="top" />
      </NavigationContainer>
    </>
  );
};

export default App;
