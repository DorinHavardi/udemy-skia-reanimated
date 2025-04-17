import { StyleSheet } from 'react-native';
import HomeBackground from './components/HomeBackground';
import WeatherTabBar from './components/tabbar/WeatherTabBar';

export default function App() {
  return (
    <>
      <HomeBackground />
      <WeatherTabBar />
    </>
  );
}

const styles = StyleSheet.create({});
