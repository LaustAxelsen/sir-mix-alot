import * as React from 'react'
import { StyleSheet, FlatList, Image, SafeAreaView, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import useDrinks from '../hooks/useDrinks'

export default function StatusScreen({ navigation }) {
  const drinksStatus = useDrinks()

  const Item = (data: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.push('MenuSingleItem', {
            item: data.item,
            name: data.item.name,
          })
        }}
      >
        <View style={{ padding: 10 }}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: data.item.image }}></Image>
          <Text style={{ fontSize: 20 }}>{data.item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>{JSON.stringify(drinksStatus, 0, 2)}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
