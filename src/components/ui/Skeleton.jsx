import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useState, useEffect} from 'react';

const Skeleton = ({height, width}) => {
  const [opacity] = useState(new Animated.Value(1));

  useEffect(() => {
    const blinkAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    );

    blinkAnimation.start();

    return () => {
      blinkAnimation.stop();
    };
  }, []);

  return (
    <Animated.View
      style={{
        height: height,
        width: width,
        backgroundColor: 'white',
        borderRadius: 14,
        opacity: opacity,
      }}></Animated.View>
  );
};

export default Skeleton;
