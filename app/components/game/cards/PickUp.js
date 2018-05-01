import React from 'react'
import {StyleSheet, Text, View, Button } from 'react-native';

class PickUp extends React.Component {    
    render() {
        return (
            <View className="section PickUp">
                {/* !! make hoverable */}
                <Button
                    title="Pick up card"
                    onPress={this.props.handlePickUp}
                    className="button">
                </Button>
            </View>
        )
    };
};

export { PickUp }
