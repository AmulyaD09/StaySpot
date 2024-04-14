import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Modal, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "./Colors";
import { Calendar } from 'react-native-calendars';

const BookingScreen = ({ route, navigation }) => {
  const { hotel } = route.params;
  const { goBack } = useNavigation();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCheckInDateSelect = (day) => {
    setCheckInDate(day.dateString);
  };

  const handleCheckOutDateSelect = (day) => {
    setCheckOutDate(day.dateString);
  };

  const handleBookRoom = () => {
    if (!checkInDate || !checkOutDate) {
      // Ensure both check-in and check-out dates are selected
      alert("Please select both check-in and check-out dates.");
      return;
    }
    navigation.navigate("Payment", { hotel, checkInDate, checkOutDate });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>{hotel.name}</Text>
      </View>
      <Image style={styles.hotelImage} source={{ uri: hotel.image }} />
      <Text style={styles.hotelDescription}>
        Welcome to {hotel.name}! Experience luxury and comfort in our elegant rooms, each
        meticulously designed to provide you with a tranquil retreat after a long day of exploration.
        {/*  Enjoy stunning views, modern amenities, and personalized service from our
        dedicated staff. Whether you're here for business or leisure, we promise an unforgettable
        stay tailored to your every need. */}
      </Text>
      <Text style={styles.totalCost}>Cost per night: $100</Text>

      <View style={styles.datePickerContainer}>
        <Text style={styles.datePickerLabel}>Check-in Date:</Text>
        <Pressable onPress={() => setShowCalendar(true)}>
          <Text style={styles.datePickerText}>{checkInDate || 'Select Date'}</Text>
        </Pressable>
      </View>

      <View style={styles.datePickerContainer}>
        <Text style={styles.datePickerLabel}>Check-out Date:</Text>
        <Pressable onPress={() => setShowCalendar(true)}>
          <Text style={styles.datePickerText}>{checkOutDate || 'Select Date'}</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable onPress={handleBookRoom} style={styles.bookRoomButton}>
          <Text style={styles.bookRoomButtonText}>Book Room</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate("Home")} style={styles.homeButton}>
        <FontAwesome name="home" size={30} color={Colors.PRIMARY} />
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showCalendar}
        onRequestClose={() => setShowCalendar(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Calendar
              onDayPress={(day) => {
                if (!checkInDate) {
                  handleCheckInDateSelect(day);
                } else {
                  handleCheckOutDateSelect(day);
                }
              }}
              current={new Date()}
              minDate={new Date().toISOString().split('T')[0]}
              hideExtraDays={true}
              markedDates={{
                [checkInDate]: { startingDay: true, color: 'green' },
                [checkOutDate]: { endingDay: true, color: 'green', textColor: 'green' },
              }}
            />
            <Button title="Close" onPress={() => setShowCalendar(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.BROWN,
    marginTop: 50
  },
  hotelImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginBottom: 20,
  },
  hotelDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: Colors.SECONDARY,
  },
  totalCost: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: Colors.BROWN,
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  datePickerLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  datePickerText: {
    fontSize: 18,
    color: Colors.PRIMARY,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  bookRoomButton: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookRoomButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  homeButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
});

export default BookingScreen;
