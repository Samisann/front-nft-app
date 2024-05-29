import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, Pressable, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            Alert.alert("Invalid Email", "Please enter a valid email address");
            return;
        }
        if (password.length < 8) {
            Alert.alert("Weak Password", "Password must be at least 8 characters long");
            return;
        }
        axios.post("http://localhost:8000/api/auth/register", { username: setUsername, email: setEmail, password: setPassword, roles: ["chasseur"] })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#240750' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20, marginTop: 20 }}>
                <Image source={require('../../assets/images/yellow_book.png')}
                    style={{ width: 250, height: 200 }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 32, paddingTop: 32, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#240750', marginBottom: 30 }}>Let’s begin the adventure!</Text>
                <View style={{ marginBottom: 16 }}>
                    <Text style={{ color: 'gray', marginLeft: 16 }}>User Name:</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#f0f0f0', color: 'gray', borderRadius: 20, marginBottom: 12 }}
                        value={username}
                        placeholder="Enter your user name"
                        onChangeText={setUsername} />
                </View>

                <View style={{ marginBottom: 16 }}>
                    <Text style={{ color: 'gray', marginLeft: 16 }}>Email Address:</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#f0f0f0', color: 'gray', borderRadius: 20, marginBottom: 12 }}
                        value={email}
                        placeholder="Enter your email address"
                        onChangeText={setEmail} />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ color: 'gray', marginLeft: 16 }}>Password:</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#f0f0f0', color: 'gray', borderRadius: 20 }}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Enter your password"
                        onChangeText={setPassword} />
                </View>
                <Pressable onPress={handleRegister} style={{ paddingVertical: 12, backgroundColor: '#FFC100', borderRadius: 25 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#240750' }}>Register</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
