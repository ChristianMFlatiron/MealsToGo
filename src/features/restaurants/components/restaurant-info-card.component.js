import React from "react";
import styled from "styled-components";
import { Text, StyleSheet } from "react-native";

import { Card } from "react-native-paper";

const Title= styled.Text`
  padding: 16px;
  color: red;
`;

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
    <Title>{name}</Title>
  </Card>
  );
};

const styles = StyleSheet.create({
    card: { backgroundColor: 'white'},
    cover: {padding: 20, backgroundColor: 'white'},
    title: {padding: 16},
});