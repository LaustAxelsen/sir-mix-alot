import * as React from 'react'
import { StyleSheet, Button, Image, SafeAreaView, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import useDrinks from './../hooks/useDrinks'

export default function MenuSingleItemScreen({ route }) {
  const drinksStatus = useDrinks()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={{ width: Dimensions.get('window').width, height: 200 }} resizeMode="cover" source={{ uri: route.params.item.image }}></Image>
        <Text style={{ padding: 10, fontWeight: '600' }}>{'Description'}</Text>
        <Text style={{ paddingBottom: 10, paddingLeft: 10, paddingRight: 10 }}>{route.params.item.description || 'No description'}</Text>
        <Text style={{ padding: 10, fontWeight: '600' }}>{'Ingredients'}</Text>
        <Text style={{ padding: 10, paddingTop: 0 }}>{route.params.item.ingredients.map((i: any) => `${i.code} (${i.volume}) `).join(', ')}</Text>
        <View style={{ padding: 20, backgroundColor: 'transparent' }}></View>
        <Button
          disabled={drinksStatus.isMakingCocktail}
          onPress={() => {
            drinksStatus.startCocktail(route.params.item.id)
          }}
          title={`Make new cocktail ${drinksStatus.isMakingCocktail ? '(busy)' : ''}`}
        />
        <Button
          disabled={drinksStatus.isMakingCocktail}
          onPress={() => {
            drinksStatus.startTestCocktail(route.params.item.id)
          }}
          title={`Dry run ${drinksStatus.isMakingCocktail ? '(busy)' : ''}`}
        />
        {drinksStatus.isMakingCocktail ? (
          <Button
            onPress={() => {
              drinksStatus.stopPuring()
            }}
            title={`Stop puring (${drinksStatus.ingredientsFinished} of ${route.params.item.ingredients.length} finished)`}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
