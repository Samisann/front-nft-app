
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Modal, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';

const Game = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      // Show modal when screen is focused
      setModalVisible(true);
      
      return () => {

      };
    }, [])
  );

  const handleChoice = (choice) => {
    console.log(`Chosen: ${choice}`);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 44.8561152,
          longitude: -0.5701632,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Choisissez le mode de jeu</Text>
            <TouchableOpacity style={styles.choiceButton} onPress={() => handleChoice('Chasseur')}>
              <Text style={styles.choiceText}>Chasseur</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.choiceButton} onPress={() => handleChoice('Organisateur')}>
              <Text style={styles.choiceText}>Organisateur</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  choiceButton: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  choiceText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Game;
