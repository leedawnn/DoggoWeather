import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from '@expo-google-fonts/inter';
import { useEffect, useState } from 'react';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function App() {
  const [city, setCity] = useState('Loading...');
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();

    if (!granted) {
      setOk(false);
      setErrorMsg('위치 접근 권한이 거부되었습니다! 🥺');
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });

    setCity(location[0].city);
  };

  useEffect(() => {
    getWeather();
  }, []);

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
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.today}>Today</Text>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.today}>Today</Text>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.today}>Today</Text>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.today}>Today</Text>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.today}>Today</Text>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
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
  weather: {},
  day: {
    width: SCREEN_WIDTH,
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
