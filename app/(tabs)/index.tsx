import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function MapScreenWeb({ navigation }) {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 47.3769, 
    lng: 8.5417,
  };

  const markers = [
    { id: 1, title: 'Löwen Gehege', position: { lat: 47.3769, lng: 8.5417 } },
    { id: 2, title: 'Elefanten Gehege', position: { lat: 47.3765, lng: 8.5455 } },
    { id: 3, title: 'Pinguine', position: { lat: 47.378, lng: 8.5435 } },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.link} onPress={() => alert('Reservationen')}>
          Reservationen
        </Text>
        <Text style={styles.title}>Standort</Text>
        <Text style={styles.link} onPress={() => alert('Logout')}>
          Logout
        </Text>
      </View>
      <View style={styles.mapContainer}>
        <LoadScript googleMapsApiKey="AIzaSyB_tp1m0zJnVQRrcc0PcZS6rl8fdFQhPEs">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={16}>
            {markers.map(marker => (
              <Marker
                key={marker.id}
                position={marker.position}
                title={marker.title}
                onClick={() =>
                  navigation.navigate('Booking', {
                    location: marker.title, // Übergibt den Namen des markierten Ortes
                  })
                }
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </View>
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
  mapContainer: {
    flex: 1,
  },
});
