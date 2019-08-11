import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { getCoins } from "./getCoins"; 
import { Header } from "./components/Header";
import { Name } from "./components/Name";
import { Price } from "./components/Price";
import { DailyChange } from "./components/DailyChange";
import { styles } from "./styles/styles";

class App extends Component {
    state = {
        coins: [],
        sortedBy: ""
    }

    componentDidMount() {
        getCoins().then(data => this.setState({ coins: data }))
    }

    sortByPrice = () => {
        const coins = this.state.coins;

        if (this.state.sortedBy == "price") {
            this.setState({
                coins: coins.reverse(),
            });

            return
        }

        coins.sort((a, b) => b.quote.USD.price - a.quote.USD.price);

        this.setState({
            coins,
            sortedBy: "price"
        });
    }

    sortByChange = () => {
        const coins = this.state.coins;

        if (this.state.sortedBy == "change") {
            this.setState({
                coins: coins.reverse(),
            });

            return
        }

        coins.sort((a, b) => b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h);

        this.setState({
            coins,
            sortedBy: "change"
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ListHeaderComponent={<Header sortByPrice={this.sortByPrice} sortByChange={this.sortByChange} />}
                    stickyHeaderIndices={[0]}
                    data={this.state.coins}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.row}>
                            <Name item={item} />
                            <Price item={item} />
                            <DailyChange item={item} />
                        </View>
                    )}
                />
            </View>
        );
    }
}

export default App;
