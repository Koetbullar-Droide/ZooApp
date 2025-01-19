// Reservations.tsx
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {Reservation, ReservationsService} from "@/components/reservationsService";

const Reservations: React.FC = () => {
    const reservationsService = new ReservationsService()
    const [reservations, setReservations] = useState<Reservation[]>([]);

    // Fetch reservations from the service when the component mounts
    useEffect(() => {
        const fetchedReservations = reservationsService.getArray();
        setReservations(fetchedReservations);
    }, []);

    // Render each reservation item
    const renderReservation = ({ item }: { item: Reservation }) => (
        <View style={styles.reservationItem}>
            <Text style={styles.date}>Date: {item.date}</Text>
            <Text style={styles.time}>
                Time: {item.startTime} - {item.endTime}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reservations</Text>
            {reservations.length > 0 ? (
                <FlatList
                    data={reservations}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderReservation}
                />
            ) : (
                <Text style={styles.noReservations}>No reservations available</Text>
            )}
        </View>
    );
};

export default Reservations;

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F5F5F5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    reservationItem: {
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    date: {
        fontSize: 16,
        fontWeight: "bold",
    },
    time: {
        fontSize: 14,
        marginTop: 5,
        color: "#555",
    },
    noReservations: {
        fontSize: 16,
        textAlign: "center",
        color: "#888",
    },
});
