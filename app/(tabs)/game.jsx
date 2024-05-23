// game component 
//
import React from 'react'
import { View, Text,StyleSheet, SafeAreaView } from 'react-native'
import { Link } from 'expo-router'
import MapView from 'react-native-maps'

const Game = () => {
    // return a map in this view but dont add the title of the view
    return (
        <SafeAreaView style={styles.container}>
    
        <MapView style={styles.map} 
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />
        
        </SafeAreaView>
    )
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        map: {
          width: '100%',
          height: '100%',
        },
      });

export default Game