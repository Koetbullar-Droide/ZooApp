import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {router} from 'expo-router'
export default function MapScreen() {
  const markers = [
    { id: 1, title: 'Löwen Gehege', coordinate: { latitude: 47.3844, longitude: 8.5784 } },
    { id: 2, title: 'Elefanten Gehege', coordinate: { latitude: 47.38465123214951, longitude: 8.574577496989463 } },
    { id: 3, title: 'Pinguine', coordinate: { latitude:  47.385358, longitude: 8.573623 } },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 47.38522638437835,
          longitude: 8.576380061544151,
          latitudeDelta: 0.013,
          longitudeDelta: 0.013,
        }}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            onPress={() => router.push("../sites/booking", { relativeToDirectory: true })}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#007AFF',
    fontSize: 16,
  },
  map: {
    flex: 1,
  },
});
