import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import EvaluatedCards from './components/EvaluatedCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      {/* <Text>App</Text> */}
      <FlatCard/>
      <EvaluatedCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App