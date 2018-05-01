import React from 'react'
import {StyleSheet, Text, View } from 'react-native';

class Scores extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            round: this.props.round,
            players: this.props.players
        }
    };

    render() {
        return (
            <View>
                <View className="currentPlayer">
                    <Text className="h2">{ this.props.name }'s turn!</Text>
                </View>
                
                <View className="section scores">
                    <Text className="strong large">Round { this.props.round }</Text>

                    <View className="scores">
                        {this.state.players.map(function(player, index){
                            return (
                                <View key={index} className="score">
                                    <Text className="strong big">{ player.name }</Text>
                                    <Text className="p">
                                        Population: { player.stats.population } {"\n"}
                                        Shelters: { player.stats.shelters } {"\n"}
                                        Drones: { player.stats.drones } {"\n"}
                                        Bombers: { player.stats.bombers } {"\n"}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </View>
        )
    };
};

export { Scores }
