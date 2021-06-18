import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'

var BASE_URL = 'http://192.168.86.35:8080'

export default function useDrinks() {
  const [currentState, setCurrentState] = React.useState({
    avbDrinks: [],
    isRunning: false,
    isMakingCocktail: false,
    ingredientsFinished: 0,
    raw: {},
  })

  // "avb_drinks": self.avb_drinks,
  // "is_making_cocktail": self.is_making_cocktail,
  // "is_running": self.last_update.timestamp() - datetime.datetime.now().timestamp() > -2,
  // "cocktail_in_progress": self.cocktail_in_progress,
  // "ingredients_finished": self.ingredients_finished})

  const actions = {
    startCocktail: (id: any) => {
      try {
        return fetch(BASE_URL + '/cocktail/' + id)
          .then((response) => response.json())
          .catch((error) => {
            //console.error(error)
          })
      } catch (e) {
      } finally {
      }
    },
    startTestCocktail: (id: any) => {
      try {
        return fetch(BASE_URL + '/cocktail/' + id + '/test')
          .then((response) => response.json())
          .catch((error) => {
            //console.error(error)
          })
      } catch (e) {
      } finally {
      }
    },
    stopPuring: () => {
      try {
        return fetch(BASE_URL + '/stop')
          .then((response) => response.json())
          .catch((error) => {
            //console.error(error)
          })
      } catch (e) {
      } finally {
      }
    },
    cleanPumps: () => {
      try {
        return fetch(BASE_URL + '/clean')
          .then((response) => response.json())
          .catch((error) => {
            //console.error(error)
          })
      } catch (e) {
      } finally {
      }
    },
    testPump: (id: any) => {
      try {
        return fetch(BASE_URL + '/pump/' + id)
          .then((response) => response.json())
          .catch((error) => {
            //console.error(error)
          })
      } catch (e) {
      } finally {
      }
    },
  }

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadStatus() {
      try {
        return fetch(BASE_URL + '/status')
          .then((response) => response.json())
          .then((responseJson) => {
            setCurrentState({
              avbDrinks: responseJson.avb_drinks,
              isRunning: !!responseJson.is_running,
              isMakingCocktail: !!responseJson.is_making_cocktail,
              ingredientsFinished: responseJson.ingredients_finished,
              raw: responseJson,
            })
          })
          .catch((error) => {
            //console.error(error)
          })
      } catch (e) {
      } finally {
      }
    }

    loadStatus()
    setInterval(() => {
      loadStatus()
    }, 1000)
  }, [])

  return { ...currentState, ...actions }
}
