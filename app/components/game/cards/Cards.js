import React from 'react'
import {StyleSheet, Text, View } from 'react-native';

import { Card } from './Card'
import {info} from './../../Info'

class Cards extends React.Component {

    render() {
        return (
            <View className="section cards">
                <Text className="strong large">Your Cards</Text>
                
                <View className="cards">
                    {this.props.cards.map ( (card, index) => {
                        let description = `${description}          `
                        description = card.description.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,1}\b/g)

                        return (
                            <View
                            key={index} 
                            onClick={this.props.handlePlayCard.bind(this, card)}
                            className="card">
                                <Card title={card.name} description={description} footer={card.effects} />
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }
};

export { Cards }
