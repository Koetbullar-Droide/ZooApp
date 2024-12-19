import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {format} from "date-fns";

export default function BookingScreen() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('10:00');
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.link} onPress={() => alert('Zurück zur Karte')}>
          Standort
        </Text>
        <Text style={styles.title}>Datum</Text>
      </View>
      <View style={styles.bookingContainer}>
        <Text style={styles.calendarHeader}>
          {selectedDate ? format(selectedDate, 'MM yyyy') : 'No Date Selected'}
        </Text>
        <DatePicker
            inline
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            calendarClassName="custom-calendar"
            showMonthYearDropdown={true}
            minDate={new Date(currentYear-1+"-01-01")}
            maxDate={new Date(currentYear+1+"-12-31")}
        />
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
                value={selectedDate ? selectedDate.toLocaleDateString('de-DE') : ''}
                editable={false}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert(`Buchung bestätigt für ${selectedDate?.toLocaleDateString()} von ${startTime} bis ${endTime}`)}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#007AFF',
    fontSize: 16,
  },
  bookingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 20,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  calendarHeader: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
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
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
