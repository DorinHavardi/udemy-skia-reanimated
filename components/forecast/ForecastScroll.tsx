import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Forecast } from '../../models/Weather';
import { ScrollView } from 'react-native-gesture-handler';
import ForecastCapsule from './ForecastCapsule';

interface ForecastScrollProps {
  forecasts: Forecast[];
  capsuleWidth: number;
  capsuleHeight: number;
  capsuleRadius: number;
}
const ForecastScroll = ({
  forecasts,
  capsuleHeight,
  capsuleRadius,
  capsuleWidth,
}: ForecastScrollProps) => {
  return (
    <ScrollView
      horizontal
      style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 10 }}
    >
      <View style={{ flex: 1, flexDirection: 'row', gap: 12 }}>
        {forecasts.map((forecast, i) => (
          <ForecastCapsule
            forecast={forecast}
            width={capsuleWidth}
            height={capsuleHeight}
            radius={capsuleRadius}
            key={i}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ForecastScroll;

const styles = StyleSheet.create({});
