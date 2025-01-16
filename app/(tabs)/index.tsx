import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { router } from 'expo-router';

export default function MapScreen() {
  const markers = [
    { id: 1, title: 'Löwen Gehege', coordinate: { latitude: 47.3769, longitude: 8.5417 } },
    { id: 2, title: 'Elefanten Gehege', coordinate: { latitude: 47.3765, longitude: 8.5455 } },
    { id: 3, title: 'Pinguine', coordinate: { latitude: 47.378, longitude: 8.5435 } },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 47.3769,
          longitude: 8.5417,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            onPress={() => router.navigate('sites/booking/')}
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
