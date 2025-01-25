import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ReservationsService, Reservation } from "@/components/reservationsService";
import {router, useLocalSearchParams, useNavigation} from "expo-router";

export default function BookingScreen() {
  let { pin } = useLocalSearchParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('10:00');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const reservationsService = ReservationsService.getInstance();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const navigation = useNavigation();

  const onChangeDate = (event: any, date?: Date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: pin || 'Booking',
      headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.link}>
              Map
            </Text>
          </TouchableOpacity>
      ),
    });
  }, [pin, navigation, router]);


  const handleConfirm = () => {
    const newReservation: Reservation = {
      date: selectedDate.toLocaleDateString('de-DE'),
      startTime: startTime,
      endTime: endTime,
      firstname: firstname,
      lastname: lastname,
      location: pin.toString(),
    };

    reservationsService.saveReservation(newReservation);
    router.back();
  };

  return (
      <View style={styles.container}>
          <View style={styles.bookingContainer}>
          <Text style={styles.calendarHeader}>
            {selectedDate.toLocaleDateString('de-DE')}
          </Text>

          <TouchableOpacity
              style={styles.datePickerButton}
              onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.buttonText}>Pick a Date</Text>
          </TouchableOpacity>

          {showDatePicker && (
              <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'inline' : 'default'}
                  onChange={onChangeDate}
              />
          )}

          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Von</Text>
              <TextInput
                  style={styles.input}
                  value={startTime}
                  onChangeText={setStartTime}
                  placeholder="HH:MM"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Bis</Text>
              <TextInput
                  style={styles.input}
                  value={endTime}
                  onChangeText={setEndTime}
                  placeholder="HH:MM"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Datum</Text>
              <TextInput
                  style={styles.input}
                  value={selectedDate.toLocaleDateString('de-DE')}
                  editable={false}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Vorname</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={setFirstname}
                  value={firstname}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={setLastname}
                  value={lastname}
              />
            </View>
          </View>

          <TouchableOpacity
              style={styles.button}
              onPress={handleConfirm}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 40,
  },
  bookingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  calendarHeader: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  datePickerButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  inputGroup: {
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#364be3'
  }
});
