import React from 'react';
import { SafeAreaView, View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#240750' }}>
            <View style={{ flex: 1, justifyContent: 'space-around', marginVertical: 16 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center' }}>
                    Welcome, let's get started!
                    Treasure Hunter
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../../assets/images/gift.png')} style={{ width: 390, height: 450 }} />
                </View>
                <View style={{ marginVertical: 16 }}>
                    <Link href={"/signUp"} style={{ textAlign: 'center', paddingVertical: 12, marginHorizontal: 28, backgroundColor: '#FFC100', borderRadius: 12 }}>
                        <Pressable>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#240750' }}>
                                Sign Up
                            </Text>
                        </Pressable>
                    </Link>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Already have an account?sdfsdf </Text>

                        <Pressable>
                            <Link href={"/login"}>
                                <Text style={{ fontWeight: '600', color: '#FFC100' }}>Log In</Text>
                            </Link>
                        </Pressable>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
