import React from 'react'; // { Component }
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

// import {Message} from './../Game/Message'
import {Player} from './../models/Player'
import {Scores} from './Scores'
import {Cards} from './cards/Cards'
import {PickUp} from './cards/PickUp'
import {info} from './../Info'
import {Turn} from './Turn'
import {Action} from './Action'

import {Deck} from './cards/Deck'

import {Computer} from './../computer/Computer'

// import uuid from 'uuid'

export default class Game extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            round: 1,
            user: 0, // the user at the computer
            currentPlayer: 0, // can be human or AI

            players: [
                new Player ('Human 1', true),
                new Player ('Computer', false)
            ],


            deck: Deck.buildDeck ()
        }

        this.handlePickUp = this.handlePickUp.bind(this)
        this.handlePlayCard = this.handlePlayCard.bind(this)
    }

    componentDidMount () {
        this.state.players.map((player, index) => {

            const action = new Action (this.state)
            const newState = action.pickUp (index, 4)
            this.setState ({
                deck: newState.deck,
                players: newState.players
            })
        })
    }

    handlePickUp(e) {
        e.preventDefault()

        if (this.state.user === this.state.currentPlayer) {
            const action = new Action (this.state)
            const newState = action.pickUp ()
            this.setState ({
                deck: newState.deck,
                players: newState.players },
                
                function () {
                    info.event (this.state.currentPlayer+'picked up', [
                        this.state.players,
                        this.state.players[this.state.currentPlayer].cards
                    ])
    
                    this.nextTurn ()
                }
            )
        }
    }

    handlePlayCard(card, e) {
        e.preventDefault()
        
        if (this.state.user === this.state.currentPlayer) {
            const action = new Action (this.state)
            const newState = action.playCard (card)
            this.setState ({
                players: newState.players },
    
                function () {
                    info.event (this.state.currentPlayer+' played '+card, [
                        this.state.players
                    ])
    
                    this.nextTurn ()
                }
            )
        }
    }

    nextTurn () {
        const turn = new Turn (this.state)
        const newState = turn.nextTurn ()
        this.setState ({
            round: newState.round,
            currentPlayer: newState.currentPlayer },

            function () {
                info.event (`Next Turn: ${this.state.currentPlayer}`, [
                    'round:'+this.state.round,
                ])

                if (this.state.players[this.state.currentPlayer].isHuman === false) {                    
                    setTimeout(() => {
                        this.computersTurn ()

                        this.nextTurn ()
                    }, 1000);
                }
            }
        )
    }

    computersTurn () {
        const computer = new Computer (this.state)
        const newState = computer.takeTurn ()

        this.setState ({
            deck: newState.deck,
            players: newState.players },
            
            function () {
                // this.nextTurn ()
            }
        )
    }

    render() {
        return (
            <View className="Game">
                {/* {(this.state.players[this.state.currentPlayer].isHuman === false) && 
                    <Message message="Computer thinking" />} */}

                <Scores 
                    name={this.state.players[this.state.currentPlayer].name} 
                    round={this.state.round} 
                    players={this.state.players} />

                <Cards 
                    handlePlayCard={this.handlePlayCard}
                    cards={this.state.players[this.state.user].cards} />

                {(this.state.currentPlayer === this.state.user) && 
                    <PickUp handlePickUp={this.handlePickUp} />}
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

    // render() {
    //     return (
    //     <View style={styles.container}>
    //         <Text>Open up Game.js to start working on your Game! :D</Text>
    //         <Text>Changes you make will automatically reload.</Text>
    //         <Text>Shake your phone to open the developer menu.</Text>
    //     </View>
    //     );
    // }