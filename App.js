import React from 'react'; // { Component }
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

import Game from './app/components/game/Game.js';

export default class App extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app! :)</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>

            <Game />
        </View>
        );
    }
}
``
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// AppRegistry.registerComponent('App', () => App);