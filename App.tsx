import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import EvaluatedCards from './components/EvaluatedCards';
import FancyCards from './components/FancyCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>App</Text> */}
        <FlatCard />
        <EvaluatedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
