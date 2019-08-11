import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from "../styles/styles";

export class Header extends Component {
    render() {
        const { sortByPrice, sortByChange } = this.props;

        return (
            <View style={[styles.row, styles.header]}>
                <Text style={[styles.cell, styles.text]}>Name</Text>
                <Text onPress={sortByPrice} style={[styles.cell, styles.text, { textAlign: "left" }]}>Price ↑↓</Text>
                <Text onPress={sortByChange} style={[styles.cell, styles.text, { textAlign: "right" }]}>24h Change ↑↓</Text>
            </View>
        )
    }
}