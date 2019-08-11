import React from 'react';
import { Text } from 'react-native';
import { styles } from "../styles/styles";

export const Price = (props) => {
    const { price } = props.item.quote.USD;

    return (
        <Text style={[styles.cell, styles.text, { textAlign: "left" }]}>${price.toFixed(5)}</Text>
    )
}