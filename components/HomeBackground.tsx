import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';

const HomeBackground = () => {
  const { height, width } = useWindowDimensions();

  return (
    <Canvas style={{ flex: 1 }}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, height)}
          colors={['#2e335a', '#1c1b33']}
        />
      </Rect>
    </Canvas>
  );
};

export default HomeBackground;
