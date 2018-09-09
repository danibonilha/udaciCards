import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { createDeck } from '../store/actions';
import {
	black,
	textprimaryColor
} from '../utils/colors';
import { TextInput, Button } from '../components';

class AddDecksScreen extends Component {
	state = {
		deckName: ''
	};

	handleTextChange = deckName => {
		this.setState({ deckName });
	};

	handleCreateDeck = () => {
		const { deckName } = this.state;
		const { createDeck, navigation } = this.props;
		createDeck(deckName);
		this.setState({ deckName: '' });
		navigation.navigate('Decks');
	};

	render() {
		const { deckName } = this.state;
		return (
			<View style={styles.container}>
				<Text
					style={styles.text}
				>
					What is the title of your new deck ?
				</Text>
				<TextInput
					onChangeText={this.handleTextChange}
					value={deckName}
				/>
				<Button
					onPress={this.handleCreateDeck}
					label="Create Deck"
					disabled={!deckName}
				/>
			</View>
		);
	}
}

export default connect(null, { createDeck })(AddDecksScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: black,
		justifyContent: 'flex-start'
	},
	text: {
		padding: 25,
		color: textprimaryColor,
		fontSize: 35,
		textAlign: 'center'
	}
});
