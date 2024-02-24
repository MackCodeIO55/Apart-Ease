import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, FONTFAMILY} from '../theme/theme';

const CardContainer = ({data}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        resizeMode="contain"
        source={{
          uri:
            data.image ||
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png',
        }}
      />
      <Text style={{fontFamily: FONTFAMILY.poppins_medium}}>{data.title}</Text>
      <Text>{data.price}</Text>
    </View>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Secondary,
    padding: 10,
    flex: 1,
    borderRadius: BORDERRADIUS.radius_15,
    maxWidth: '50%',
  },
  imageStyle: {
    aspectRatio: 1,
    width: '100%',
  },
});
