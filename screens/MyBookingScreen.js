import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyBookingScreen = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const storedBookings = await AsyncStorage.getItem("@bookings");
        if (storedBookings) {
          const bookingList = JSON.parse(storedBookings);
          setBookings(bookingList);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Bookings</Text>
      {bookings.length === 0 ? (
        <Text>No bookings yet.</Text>
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookingItem}>
              <Text>Hotel: {item.hotelName}</Text>
              <Text>Check-in: {item.checkInDate}</Text>
              <Text>Check-out: {item.checkOutDate}</Text>
              <Text>Total Cost: ${item.totalCost}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bookingItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default MyBookingScreen;
