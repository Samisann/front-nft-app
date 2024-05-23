import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import Home from './home'
import Profile from './profile'
import Game from './game'


const tabsLayout = () => {

  const Tab = createBottomTabNavigator()

  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';

            } else if (route.name === 'Game') {
              iconName = focused ? 'game-controller' : 'game-controller-outline';
              
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Game" component={Game} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    
  );

  

}
export default tabsLayout

const styles = StyleSheet.create({})