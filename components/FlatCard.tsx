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
	container: {},
	card: {
		flex  : 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 100,
		width: 100,
		margin: 10,
		backgroundColor : "red",
		borderRadius : 10,
	},
	card1: {},
});

export default FlatCard;