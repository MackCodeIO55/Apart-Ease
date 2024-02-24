import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';
import SearchInput from '../components/ui/SearchInput';
import Button from '../components/ui/Button';
const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.inputHeaderContainer}>
        <SearchInput />
      </View>
      <Button
        onPress={() => {
          navigation.navigate('HomeDetailScreen');
        }}
        title={'Details'}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  scrollViewContainer: {},
  inputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
});
