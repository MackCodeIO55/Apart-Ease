import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../screens/Auth/Signin';
import Register from '../screens/Auth/Register';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import TabNavigator from './TabNavigator';
import SearchScreen from '../screens/SearchScreen';
import HomeDetailScreen from '../screens/HomeDetailScreen';
import ResetPassword from '../screens/Auth/ResetPassword';
import {useSelector} from 'react-redux';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const isActive = useSelector(state => state.user.isLoggedIn);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isActive ? (
        <>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              animation: 'default',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="HomeDetailScreen"
            component={HomeDetailScreen}
            options={{
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{
              animation: 'slide_from_right',
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              animation: 'slide_from_right',
            }}
          />

          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              animation: 'slide_from_right',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
