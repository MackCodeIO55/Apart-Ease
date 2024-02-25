import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigators/StackNavigation';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <StackNavigation />
          <Toast position="top" />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
