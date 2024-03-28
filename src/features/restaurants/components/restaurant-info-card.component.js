import React from "react";
import { Text, StyleSheet } from "react-native";

import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = ['https://randommer.io/images/foods/Tamale.webp'],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
  <Card elevation={5} style={StyleSheet.card}>
    <Card.Cover key={name} style={StyleSheet.cover} source={{ uri: photos[0]}} />
    <Text style={styles.title}>{name}</Text>
  </Card>
  );
};

const styles = StyleSheet.create({
    card: { backgroundColor: 'white'},
    cover: {padding: 20, backgroundColor: 'white'},
    title: {padding: 16},
});