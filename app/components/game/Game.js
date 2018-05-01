import React from 'react'; // { Component }
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

// import {Game} from './components/Game/Game'

export default class Game extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>Open up Game.js to start working on your Game! :D</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// AppRegistry.registerComponent('Game', () => Game);