import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ArcComponent from './elements/ArcComponent';
import useApplicationDimensions from '../../hooks/useApplicationDimensions';
import TabBarItems from './elements/TabBarItems';

const WeatherTabBar = () => {
  const TabBarHeight = 88;
  const { width, height } = useApplicationDimensions();
  return (
    <View
      style={{
        height: TabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabBarHeight,
      }}
    >
      <ArcComponent height={TabBarHeight} width={width} />
      <TabBarItems />
    </View>
  );
};

export default WeatherTabBar;
