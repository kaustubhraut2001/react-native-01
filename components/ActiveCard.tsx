import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const ActiveCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
    console.log(websiteLink);
  }

  const {width, height} = Dimensions.get('window');
  return (
    <View>
      <Text style={styles.heading}>ActiveCard</Text>
      <View style={[styles.card, styles.elivated]}>
        <View style={styles.headingConatiner}>
          <Text style={styles.heading}>Card 1</Text>
        </View>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1445069240/photo/businessman-pointing-folder-and-document.jpg?s=1024x1024&w=is&k=20&c=SAoFlG42g-Shmhj0lp9Q8CirUHnTNwrGCJ6Ui28dlX4=',
          }}
          style={styles.card}
        />
        <View style={styles.bodycontainer}>
          <Text style={styles.bodytext} numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            temporibus ab debitis ipsam minus aliquid officia unde placeat eaque
            pariatur. Iste hic ab dolores nisi debitis ratione dignissimos?
            Quibusdam, possimus.
          </Text>
        </View>
        <TouchableOpacity onPress={() => openWebsite('https://www.google.com')}>
          <Text>Open Website</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: `height`,
    width: `width`,
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
  },
  headingConatiner: {
    backgroundColor: 'green',
  },
  bodycontainer: {
    height: 100,
    width: 100,
    margin: 10,
    backgroundColor: 'lightgrey',
  },
  bodytext: {
    fontSize: 15,
    margin: 10,
    textAlign: 'center',
  },
});
export default ActiveCard;
