import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      {/* <Text>App</Text> */}
      <FlatCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App