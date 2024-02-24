import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppHeader from '../components/ui/AppHeader';
import {COLORS, SPACING} from '../theme/theme';
import Input from '../components/ui/Input';
import axios from 'axios';
import CardContainer from '../components/CardContainer';

const HomeDetailScreen = ({navigation}) => {
  const [productData, setProductData] = useState([]);

  const getProductData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProductData(res.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <View style={styles.container}>
      <AppHeader
        name={'arrow-left'}
        header={'Community Market'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.mainContainer}>
        <Input placeholder={'Search here...'} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={productData}
          renderItem={({item}) => <CardContainer data={item} />}
          numColumns={2}
          contentContainerStyle={{gap: 10}}
          columnWrapperStyle={{gap: 10}}
        />
      </View>
    </View>
  );
};

export default HomeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: COLORS.White,
    paddingHorizontal: SPACING.space_12,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.space_20,
  },
});
