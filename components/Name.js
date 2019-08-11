import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "../styles/styles";

export const Name = (props) => {
    const { symbol, name } = props.item;

    return (
        <View style={styles.cell}>
            <Text style={[styles.text, styles.textBig]}>
                {symbol}
            </Text>
            <Text style={[styles.text, styles.textSmall]}>
                {name}
            </Text>
        </View>
    )
}