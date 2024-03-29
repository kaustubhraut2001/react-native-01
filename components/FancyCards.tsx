import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

const FancyCards = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View>
      <Text style={styles.headingtext}>FancyCards</Text>
      <View style={[styles.card, styles.conatiner]}>
        <Image
          style={[{width: '100%', aspectRatio: 5 / 1}, styles.card]}
          source={{
            uri: 'https://media.istockphoto.com/id/1445069240/photo/businessman-pointing-folder-and-document.jpg?s=1024x1024&w=is&k=20&c=SAoFlG42g-Shmhj0lp9Q8CirUHnTNwrGCJ6Ui28dlX4=',
          }}
        />
        <View>
          <Text style={styles.cardbody}>Image for Testing</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'lightgrey',
  },
  headingtext: {
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
  cardbody: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  //   cardelevated: {
  //     backgroundColor: 'yellow',
  //     elevation: 4,
  //     padding: 10,
  //     margin: 10,
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //   },
});

export default FancyCards;
