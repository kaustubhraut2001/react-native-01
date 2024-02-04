import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Contactlist = () => {
  return (
    <View>
      <Text style={styles.headingtext}>Contactlist</Text>
      <ScrollView style={styles.container}>
        {contactList.map(c => (
          <View key={c.uid} style={styles.usercard}>
            <Image source={{uri: c.imageUrl}} style={{width: 50, height: 50}} />
            <Text style={styles.username}>{c.name}</Text>
            <Text style={styles.status}>{c.status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const contactList = [
  {
    uid: '1',
    name: 'John Doe',
    status: 'Active',
    imageUrl: 'https://example.com/john_doe.jpg',
  },
  {
    uid: '2',
    name: 'Jane Smith',
    status: 'Away',
    imageUrl: 'https://example.com/jane_smith.jpg',
  },
  {
    uid: '3',
    name: 'Alice Johnson',
    status: 'Offline',
    imageUrl: 'https://example.com/alice_johnson.jpg',
  },
  {
    uid: '4',
    name: 'Bob Williams',
    status: 'Active',
    imageUrl: 'https://example.com/bob_williams.jpg',
  },
  {
    uid: '5',
    name: 'Eva Davis',
    status: 'Busy',
    imageUrl: 'https://example.com/eva_davis.jpg',
  },
];

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  container: {
    height: 500,
    width: 300,
    flex: 1,
    flexDirection: 'column',
  },
  usercard: {
    marginVertical: 10,
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  status: {
    color: 'gray',
    marginTop: 3,
  },
});

export default Contactlist;
