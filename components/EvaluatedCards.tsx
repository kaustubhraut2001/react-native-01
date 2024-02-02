import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const EvaluatedCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Evaluated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elivated]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.elivated]}>
          <Text>Card 2</Text>
        </View>
        <View style={[styles.card, styles.elivated]}>
          <Text>Card 3</Text>
        </View>
        <View style={[styles.card, styles.elivated]}>
          <Text>Card 4</Text>
        </View>
        <View style={[styles.card, styles.elivated]}>
          <Text>Card 5</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: 400,
    height: 150,

    padding: 10,
    margin: 3,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    margin: 10,

    borderRadius: 10,
  },
  elivated: {
    backgroundColor: 'yellow',
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
  },
});

export default EvaluatedCards;
