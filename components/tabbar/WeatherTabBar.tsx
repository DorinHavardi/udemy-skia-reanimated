import { StyleSheet } from 'react-native';
import React from 'react';
import ArcComponent from './elements/ArcComponent';
import useApplicationDimensions from '../../hooks/useApplicationDimensions';
import TabBarItems from './elements/TabBarItems';
import { BlurView } from 'expo-blur';

const WeatherTabBar = () => {
  const TabBarHeight = 88;
  const { width, height } = useApplicationDimensions();
  return (
    <BlurView
      style={{
        height: TabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabBarHeight,
      }}
      intensity={50}
      tint="dark"
    >
      <ArcComponent height={TabBarHeight} width={width} />
      <TabBarItems />
    </BlurView>
  );
};

export default WeatherTabBar;
