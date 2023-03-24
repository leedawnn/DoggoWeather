import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Ubuntu-light': require('./assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.today}>Today</Text>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </View>
      <View style={styles.DetailWeather}></View>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1,
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    color: '#ffffff',
    fontFamily: 'Ubuntu-medium',
    fontSize: 38,
  },
  weather: {
    flex: 2,
  },
  day: {
    flex: 1,
    alignItems: 'center',
  },
  today: {
    marginTop: 50,
    fontFamily: 'Ubuntu-medium',
    fontSize: 36,
  },
  temp: {
    marginTop: 10,
    fontFamily: 'Ubuntu-bold',
    fontSize: 92,
  },
  description: {
    fontFamily: 'Ubuntu-regular',
    fontSize: 24,
  },
  DetailWeather: {
    flex: 2,
  },
});
