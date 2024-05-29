import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, Pressable, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log("Login component mounted");
    }, []);

    const handleLogin = () => {
        console.log(email, password);

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            Alert.alert("Invalid Email", "Please enter a valid email address");
            return;
        }
        if (password.length < 8) {
            Alert.alert("Weak Password", "Password must be at least 8 characters long");
            return;
        }
        axios.get("http://localhost:8000/api/auth/login")
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#240750' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image source={require('../../assets/images/golden_yellow.png')}
                    style={{ width: 200, height: 200 }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 32, paddingTop: 32, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={{ marginBottom: 16 }}>
                    <Text style={{ color: 'gray', marginLeft: 16 }}>Email Address</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#f0f0f0', color: 'gray', borderRadius: 20, marginBottom: 12 }}
                        value={email}
                        placeholder="Enter your email address"
                        onChangeText={setEmail} />
                </View>
                <View style={{ marginBottom: 16 }}>
                    <Text style={{ color: 'gray', marginLeft: 16 }}>Password</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#f0f0f0', color: 'gray', borderRadius: 20 }}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        placeholder="Enter your password" />
                </View>
                <Pressable style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
                    <Text style={{ color: 'gray' }}>Forgot Password?</Text>
                </Pressable>
                <Pressable
                    onPress={handleLogin}
                    style={{ paddingVertical: 12, backgroundColor: '#FFC100', borderRadius: 25 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#240750' }}>Login</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
