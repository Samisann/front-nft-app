import React from 'react';
import { SafeAreaView, View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import Welcome from '../(auth)/welcome';
import { SearchBar } from '../(dashboard)/searchBar';


export function Home() {

    return (
       <>
        <Welcome />
        </>
    );
}
