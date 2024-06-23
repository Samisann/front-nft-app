import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, Button, Image, TouchableOpacity,StyleSheet,Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styled } from "nativewind";

const StyledView = styled(View);

const Profile = (props) => {
  const [username, setUsername] = useState('Maha');
  const [email, setEmail] = useState('maha@example.com');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1716428325370-c3f667316f39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  const [score, setScore] = useState(1200);
  
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white my-0 py-0">
      <View className="flex justify-center items-center mt-4">
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: image }} className="w-32 h-32 rounded-full" />
        </TouchableOpacity>
        <Text className="font-psemibold text-lg text-gray-800 mt-2">{username}</Text>
      </View>
      <View className="flex px-4 mt-4 mb-4">
        <View className="flex justify-between items-center">
          <Ionicons name="medal" size={44} color="gold" />
          <Text className="font-psemibold text-lg text-gray-800">Ton Score: {score}</Text>
        </View>
      </View>
      <View className="flex px-4">
        <StyledView className="mb-4">
          <Text className="text-lg text-gray-700 mb-2">Nom d'utilisateur</Text>
          <TextInput
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
            }}
            value={username}
            onChangeText={setUsername}
          />
        </StyledView>
        <StyledView className="mb-4">
          <Text className="text-lg text-gray-700 mb-2">Email</Text>
          <TextInput
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
            }}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </StyledView>
        <StyledView className="mb-4">
          <Text className="text-lg text-gray-700 mb-2">Mot de passe</Text>
          <TextInput
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
            }}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </StyledView>
        <Pressable style={styles.button} onPress={() => alert('Profile Updated')}>
          <Text style={styles.text}>Sauvegarder</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Profile;
