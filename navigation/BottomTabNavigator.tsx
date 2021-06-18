import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import MenuScreen from '../screens/MenuScreen'
import MenuSingleItemScreen from '../screens/MenuSingleItemScreen'
import StatusScreen from '../screens/StatusScreen'
import MaintenanceScreen from '../screens/MaintenanceScreen'
import { BottomTabParamList, MenuParamList as MenuParamList, StatusScreenList } from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator initialRouteName="Menu" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Menu"
        component={MenuNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="wine-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Status"
        component={StatusNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="bulb-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Maintenance"
        component={MaintenanceNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cog-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MenuStack = createStackNavigator<MenuParamList>()

function MenuNavigator() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="MenuScreen" component={MenuScreen} options={{ headerTitle: 'How can I serve?' }} />
      <MenuStack.Screen name="MenuSingleItem" component={MenuSingleItemScreen} options={({ route }) => ({ title: route.params.name })} />
    </MenuStack.Navigator>
  )
}

const TabTwoStack = createStackNavigator<TabTwoParamList>()

function StatusNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name="StatusScreen" component={StatusScreen} options={{ headerTitle: 'Status' }} />
    </TabTwoStack.Navigator>
  )
}

function MaintenanceNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name="MaintenanceScreen" component={MaintenanceScreen} options={{ headerTitle: 'Maintenance' }} />
    </TabTwoStack.Navigator>
  )
}
