import React from 'react'; // { Component }
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

import Game from './app/components/game/Game.js';

export default class App extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Game />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // margin: '20pt 10pt',
    }
});

// AppRegistry.registerComponent('App', () => App);

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });