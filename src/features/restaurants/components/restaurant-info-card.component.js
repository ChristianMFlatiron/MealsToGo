import React from "react";
import styled from "styled-components";
import { Text, StyleSheet } from "react-native";

import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;
const Title= styled(Text)`
  padding: 20px;
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
  <RestaurantCard elevation={5}>
    <RestaurantCardCover key={name} source={{ uri: photos[0]}} />
    <Title>{name}</Title>
  </RestaurantCard>
  );
};
