import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import UserAccount from '../screens/UserAccount';
import HouseScreen from '../screens/HouseScreen';
import CommunityScreen from '../screens/CommunityScreen';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}>
                <CustomIcon
                  name="search"
                  size={FONTSIZE.size_30}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="House"
        component={HouseScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}>
                <CustomIcon
                  name="user"
                  size={FONTSIZE.size_30}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}>
                <CustomIcon
                  name="ticket"
                  size={FONTSIZE.size_30}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="UserAccount"
        component={UserAccount}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? {backgroundColor: COLORS.Orange} : {},
                ]}>
                <CustomIcon
                  name="video"
                  size={FONTSIZE.size_30}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});
