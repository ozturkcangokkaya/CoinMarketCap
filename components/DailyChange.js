import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "../styles/styles";

export const DailyChange = (props) => {
    const { percent_change_24h } = props.item.quote.USD;
    let bgColor = "";

    if (percent_change_24h > 0) {
        bgColor = "#007D51";
    }

    if (percent_change_24h < 0) {
        bgColor = "#B50000";
    }

    if (percent_change_24h == 0) {
        bgColor = "#D3D3D3";
    }

    return (
        <View style={styles.cell}>
            <Text style={[styles.text, styles.dailyChange, { backgroundColor: bgColor, textAlign: "center" }]}>
                {percent_change_24h.toFixed(2)}%
            </Text>
        </View>
    )
}