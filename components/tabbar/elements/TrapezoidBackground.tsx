import React from 'react';
import {
  Canvas,
  FitBox,
  LinearGradient,
  Path,
  rect,
  vec,
} from '@shopify/react-native-skia';

interface TrapezoidBackgroundProps {
  width: number;
  height: number;
}

const TrapezoidBackground = ({ width, height }: TrapezoidBackgroundProps) => {
  return (
    <Canvas style={{ width, height }}>
      <FitBox src={rect(0, 0, 266, 100)} dst={rect(0, 0, width, height)}>
        <Path path="M112 0H154C186 0 195.501 24.1398 205.732 48.6985C216.325 74.1247 227 100 262 100H4.00006C39.0001 100 49.6754 74.1247 60.2678 48.6985C70.4989 24.1398 80.0001 0 112 0Z">
          <LinearGradient
            start={vec(width / 2, height)}
            end={vec(width / 2, 0)}
            colors={['#262C51', '#3E3F74']}
          />
        </Path>
        <Path
          path="M112 0.25H154C169.923 0.25 180.229 6.24992 187.838 15.3008C194.509 23.2363 199.109 33.518 203.585 44.1982L205.502 48.7949C210.794 61.4986 216.125 74.3646 224.524 84.0479C231.574 92.1753 240.781 98.0562 253.919 99.75H12.0811C25.2187 98.0562 34.4259 92.1753 41.4756 84.0479C48.825 75.5749 53.8252 64.6651 58.5059 53.5596L60.4981 48.7949C65.6184 36.5041 70.5379 24.37 78.1622 15.3008C85.771 6.24992 96.0772 0.25 112 0.25Z"
          style={'stroke'}
          strokeWidth={0.5}
          color="rgba(117,130,244,0.5)"
        />
      </FitBox>
    </Canvas>
  );
};

export default TrapezoidBackground;
