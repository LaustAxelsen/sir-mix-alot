import * as React from 'react'
import { StyleSheet, FlatList, Image, SafeAreaView, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import useDrinks from '../hooks/useDrinks'

export default function StatusScreen({ navigation }) {
  const drinksStatus = useDrinks()

  var actions: any = [
    {
      label: 'Clean all',
      onPress: () => {
        drinksStatus.cleanPumps()
      },
    },
    {
      label: 'Stop pumping',
      onPress: () => {
        drinksStatus.stopPuring()
      },
    },
    {
      label: 'Start Pump 1',
      onPress: () => {
        drinksStatus.testPump('pump1')
      },
    },
    {
      label: 'Start Pump 2',
      onPress: () => {
        drinksStatus.testPump('pump2')
      },
    },
    {
      label: 'Start Pump 3',
      onPress: () => {
        drinksStatus.testPump('pump3')
      },
    },
    {
      label: 'Start Pump 4',
      onPress: () => {
        drinksStatus.testPump('pump4')
      },
    },
    {
      label: 'Start Pump 5',
      onPress: () => {
        drinksStatus.testPump('pump5')
      },
    },
    {
      label: 'Start Pump 6',
      onPress: () => {
        drinksStatus.testPump('pump6')
      },
    },
  ]

  const Item = (data: any) => {
    return (
      <TouchableOpacity onPress={data.item.onPress}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20 }}>{data.item.label}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={actions} renderItem={Item} keyExtractor={(i) => i.label} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
})
