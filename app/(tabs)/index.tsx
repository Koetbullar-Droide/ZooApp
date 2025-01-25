import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { router } from 'expo-router';

export default function MapScreen() {
  const markers = [
    { id: 1, title: 'Masoala Halle', coordinate: { latitude: 47.3844, longitude: 8.5784 } },
    { id: 2, title: 'Eingang', coordinate: { latitude: 47.38465123214951, longitude: 8.574577496989463 } },
    { id: 3, title: 'Kapuzineraffen', coordinate: { latitude: 47.385358, longitude: 8.573623 } },
    { id: 4, title: 'Fledermäuse', coordinate: { latitude: 47.385729, longitude: 8.577960 } },
    { id: 5, title: 'Spielplatz', coordinate: { latitude: 47.38679629566678, longitude: 8.576880642970357 } },
    { id: 6, title: 'Elefantenhaus', coordinate: { latitude: 47.38803223357571, longitude: 8.577664933467723 } },
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
                  onPress={() =>
                      router.push(`/sites/${encodeURIComponent(marker.title)}`)
                  }
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
