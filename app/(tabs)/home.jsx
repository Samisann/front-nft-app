import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Text, View, ActivityIndicator, Pressable, Alert } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styled } from "nativewind";
import axios from 'axios';

const StyledView = styled(View);

// Memoized component for rendering items
const MemoizedNFTItem = React.memo(({ item }) => {
  const imageUrl = item.image_url || "https://images.unsplash.com/photo-1645731505493-7a13123374fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const name = item.name || 'Unnamed NFT';
  const description = item.description || 'No description available';

  return (
    <Pressable onPress={() => Alert.alert('NFT', `Name: ${name}\nDescription: ${description}`)}>
    <View className="px-4">
      <View className="w-full bg-white rounded-lg shadow-md">
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-40"
          resizeMode="cover"
        />
        <View className="p-4">
          <Text className="text-lg p-4 font-bold">{name}</Text>
          <Text className="text-sm text-gray-500">{description}</Text>
        </View>
      </View>
    </View>
    </Pressable>
  );
});

const Home = ({ navigation }) => {
  const [nfts, setNfts] = useState([]);
  const [nftsCategory, setNftsCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/nft/getNFTS'); // Adjust the URL as needed
        setNfts(response.data);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        setNfts([]); // Set to empty array if there's an error
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  useEffect(() => {
    const fetchNFTsCategory = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/collection/getCollections'); // Adjust the URL as needed
        setNftsCategory(response.data);
      } catch (error) {
        console.error("Error fetching NFTs category:", error);
        setNftsCategory([]); // Set to empty array if there's an error
      }
    };

    fetchNFTsCategory();
  }, []);

  const renderItem = useCallback(
    ({ item }) => <MemoizedNFTItem item={item} />,
    []
  );

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1 }} className="bg-white justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white my-0 py-0">
      <View className="flex px-4 mt-4">
        <View className="flex justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-pmedium text-sm text-gray-600">Welcome Back</Text>
            <Text className="text-2xl font-psemibold text-black">Maha</Text>
          </View>
          <View className="flex justify-end items-center">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1716428325370-c3f667316f39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
              className="w-10 h-12 rounded-md"
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
      <View className="bg-black mb-4 w-full">
        <View className="flex justify-between px-4">
          <StyledView className="flex flex-row justify-between items-center">
            <Text className="text-xl font-bold p-2 text-white">Categories</Text>
          </StyledView>
        </View>
      </View>
      <FlatList
        data={nftsCategory}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        horizontal
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
      />
      <View className="bg-black mb-4 mt-4 w-full">
        <View className="flex justify-between px-4">
          <StyledView className="flex flex-row justify-between items-center">
            <Text className="text-xl font-bold p-2 text-white">Trending</Text>
            <Ionicons name="filter" size={24} color="white" />
          </StyledView>
        </View>
      </View>
      <FlatList
        data={nfts}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        horizontal
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
};

export default Home;
