import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function ContactScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Kontaktdaten</Text>
        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Vorname</Text>
            <TextInput style={styles.input} placeholder="Vorname"/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Name" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Passwort</Text>
            <TextInput style={styles.input} placeholder="Passwort" secureTextEntry={true}/>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    elevation: 3, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
});
