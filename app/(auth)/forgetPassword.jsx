import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, Pressable, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

export default function ForgetPassword() {
    const [email, setEmail] = useState('');

    const handleForgetPassword = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            Alert.alert("Invalid Email", "Please enter a valid email address");
            return;
        }

        axios.post("http://localhost:8000/api/auth/forgetPassword", { email: email })
            .then(response => {
                console.log("Reset password email sent:", response);
                Alert.alert("Check Your Email", "A link to reset your password has been sent to your email address.");
            })
            .catch(error => {
                console.error("Failed to send reset email:", error);
                Alert.alert("Failed", "Unable to send reset link, please try again later.");
            });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#240750' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20, marginTop: 20 }}>
                <Image source={require('../../assets/images/yellow_book.png')}
                    style={{ width: 250, height: 200 }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 32, paddingTop: 32, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#240750', marginBottom: 30 }}>Reset Your Password</Text>
                <View style={{ marginBottom: 16 }}>
                    <Text style={{ color: 'gray', marginLeft: 16 }}>Email Address:</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#f0f0f0', color: 'gray', borderRadius: 20, marginBottom: 12 }}
                        value={email}
                        placeholder="Enter your email address"
                        onChangeText={setEmail} />
                </View>
                <Pressable onPress={handleForgetPassword} style={{ paddingVertical: 12, backgroundColor: '#FFC100', borderRadius: 25 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#240750' }}>Send Reset Link</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
