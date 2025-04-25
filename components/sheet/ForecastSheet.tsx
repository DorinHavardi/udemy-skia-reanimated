import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import ForecastSheetBackground from './ForecastSheetBackground';
import useApplicationDimensions from '../../hooks/useApplicationDimensions';

const ForecastSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { width, height } = useApplicationDimensions();
  const snapPoints = ['38.5%', '83%'];
  const firstSnapPoint = (height * parseFloat(snapPoints[0])) / 100;
  const cornerRadius = 44;

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={{
        width: 48,
        height: 5,
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
      backgroundComponent={() => (
        <ForecastSheetBackground
          width={width}
          height={firstSnapPoint}
          cornerRadius={cornerRadius}
        />
      )}
    >
      <BottomSheetView style={{ flex: 1 }}>
        <Text>Bottom Sheet Content</Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default ForecastSheet;
const styles = StyleSheet.create({});
