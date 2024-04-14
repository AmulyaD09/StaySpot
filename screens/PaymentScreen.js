import React from "react";
import { View, Text, StyleSheet, Button, Alert, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "./Colors";

const PaymentScreen = ({ navigation }) => {
  const handlePayment = () => {
    Alert.alert(
      "Booking Confirmation",
      "Your room has been successfully booked!",
      [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("Home");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose Payment Method</Text>
      <View style={styles.paymentOptions}>
        <Button 
          title="Credit/Debit Card"
          onPress={handlePayment}
          color={Colors.PRIMARY}
        />
        <View style={styles.separator} />
        <Button
          title="Cash"
          onPress={handlePayment}
          color={Colors.PRIMARY}
        />
      </View>
      <Pressable onPress={() => navigation.navigate("Home")} style={styles.homeButton}>
        <FontAwesome name="home" size={30} color={Colors.PRIMARY} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.BROWN,
  },
  paymentOptions: {
    width: "80%",
    marginTop: 20,
   
  },
  separator: {
    marginVertical: 10,
  },
  homeButton: {
    position: "absolute",
    bottom: 20,
  },
});

export default PaymentScreen;
