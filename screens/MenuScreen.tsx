import * as React from 'react'
import { StyleSheet, FlatList, Image, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import useDrinks from './../hooks/useDrinks'

export default function MenuScreen({ navigation }) {
  const drinksStatus = useDrinks()

  const Item = (data: any) => {
    return (
      <TouchableOpacity
        key={data.item.id}
        onPress={() => {
          navigation.push('MenuSingleItem', {
            item: data.item,
            name: data.item.name,
          })
        }}
      >
        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Image style={{ width: 100, height: 100, borderRadius: 80 }} source={{ uri: data.item.image }}></Image>
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 50 }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>{data.item.name}</Text>
            <Text style={{ fontSize: 10, fontWeight: '400', width: 200 }}>{data.item.description.slice(0, 100) + (data.item.description.length > 100 ? '...' : '')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {drinksStatus.avbDrinks.length == 0 ? <Text>{'No drinks'}</Text> : null}
      <FlatList
        data={drinksStatus.avbDrinks.sort((a, b) => {
          return a.name > b.name ? 1 : -1
        })}
        renderItem={Item}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
