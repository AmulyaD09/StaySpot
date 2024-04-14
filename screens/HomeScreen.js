import React, { useLayoutEffect } from "react";
import { ScrollView, Pressable, Text, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "./Colors";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Stay Spot",
      headerTitleStyle: {
        fontSize: 23,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: Colors.PRIMARY,
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => null,
    });
  }, [navigation]);


  const hotels = [
    {
      name: "Cozy Studio Apartment",
      image: "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?w=996&t=st=1712930561~exp=1712931161~hmac=a8a12e01d62d035590b20a4b1b0949ab2eb24288619ba8365f4174db546a8a91",
    },
    {
      name: "Coastal Hotel Room",
      image: "https://img.freepik.com/premium-photo/coastal-hotel-room-with-ocean-view-generative-ai-aig30_31965-186931.jpg?w=1380",
    },
    {
      name: "City Hotel",
      image: "https://as1.ftcdn.net/v2/jpg/03/59/05/08/1000_F_359050877_gpqU5bElmzOgGEzrcTIMPxKRB7lzIhIo.jpg",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Unlock the door for your perfect stay</Text>
      {hotels.map((hotel, index) => (
        <Pressable
          key={index}
          style={styles.hotelContainer}
          onPress={() => navigation.navigate("Booking", { hotel })}
        >
          <Image style={styles.hotelImage} source={{ uri: hotel.image }} />
          <Text style={styles.hotelName}>{hotel.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 15,
    color: Colors.SECONDARY
  },
  hotelContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  hotelImage: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
