import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  const { coords } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: coords.lat,
          longitude: coords.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          title="I am here"
          coordinate={{ latitude: coords.lat, longitude: coords.lon }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
