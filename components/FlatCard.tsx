import { View, Text  , StyleSheet} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
	<View>
	  <Text style = {styles.headingText}>FlatCard</Text>
	  <View style = {styles.container}>
		<View style = {[styles.card , styles.card1]}>
		  <Text>Card Item Red</Text>
		</View>
		<View style = {[styles.card , styles.card2]}>
		  <Text>Card Item Blue</Text>
		</View>
		<View style = {[styles.card , styles.card3]}>
		  <Text>Card Item Green</Text>
		</View>
		<View style = {[styles.card , styles.card1]}>
		  <Text>Card Item Red</Text>
		</View>
	  </View>
	</View>
  )
}
const styles = StyleSheet.create({
	headingText: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	container: {
		flex : 1,
		flexDirection: 'row',

		padding: 4,
		margin: 4,
	},
	card: {
		flex  : 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 100,
		width: 100,
		margin: 10,

		borderRadius : 10,
	},
	card1: {
		backgroundColor : "red",
	},
	card2 : {
		backgroundColor : "blue",
	},
	card3 : {
				backgroundColor : "green",

	}
});

export default FlatCard;