import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppHeader from '../components/ui/AppHeader';
import {COLORS, SPACING} from '../theme/theme';
import Input from '../components/ui/Input';
import axios from 'axios';
import CardContainer from '../components/CardContainer';
import globalStyles from '../styles/globalStyle';

const HomeScreen = () => {
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
    <View style={globalStyles.container}>
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

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.space_20,
  },
});
