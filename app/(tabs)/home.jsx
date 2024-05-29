import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { image } from "../../constants";
import { styled } from "nativewind";

const StyledView = styled(View);

const Home = () => {


  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  categories = [
    { key: 'dracaufeu', images: 'https://images.unsplash.com/photo-1716428325370-c3f667316f39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { key: 'reptincely', images:  'https://images.unsplash.com/photo-1716428325370-c3f667316f39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { key: 'florizar', images:  'https://images.unsplash.com/photo-1716428325370-c3f667316f39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { key: 'carapuce', images:  'https://images.unsplash.com/photo-1716428325370-c3f667316f39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { key: 'pikachu', images:   'https://images.unsplash.com/photo-1716428325370-c3f667316f39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
   
  ]

  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
    <SafeAreaView className="bg-white w-full h-full">
      
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-600">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-black">
                  Maha
                </Text>
              </View>

              <View className="flex justify-end items-center">
                <Image
                  source={{uri: 'https://images.unsplash.com/photo-1716428325370-c3f667316f39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
                  // rounded-full
                  className="w-10 h-12 rounded-md"
                  resizeMode="cover"
                />
              </View>
            </View>
      </View>
      {/* title of section */}
      <View className="bg-black mb-4 w-full">
    {/* title of section */}
    <View className="flex justify-between px-4">
      {/* trending title + icon filter */}
      <StyledView className="flex flex-row justify-between items-center">
        <Text className="text-xl font-bold p-2 text-white">Categories</Text>
        <Ionicons name="filter" size={24} color="white" />
      </StyledView>

  
   
    
    </View>
    </View>
      
      <FlatList
        
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View className="flex justify-between  px-4">
            <View className="w-full bg-white rounded-lg shadow-md">
              
              <Image
                source={{ uri: item.images }}
                className="w-full h-40"
                resizeMode="cover"
              />
              <View className="p-4">
                <Text className="text-lg font-bold">{item.key}</Text>
              </View>
            </View>
          </View>
        )}
    horizontal
      />


    {/* separator */}
    <View className="bg-black mb-4 w-full">
    {/* title of section */}
    <View className="flex justify-between px-4">
      {/* trending title + icon filter */}
      <StyledView className="flex flex-row justify-between items-center">
        <Text className="text-xl font-bold p-2 text-white">Trending</Text>
        <Ionicons name="filter" size={24} color="white" />
      </StyledView>

  
   
    
    </View>
    </View>
    <FlatList
      data={categories}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <View className=" px-4">
          <View className="w-full bg-white rounded-lg shadow-md">
            
            <Image
              source={{ uri: item.images }}
              className="w-full h-40"
              resizeMode="cover"
            />
            <View className="p-4">
              <Text className="text-lg font-bold">{item.key}</Text>
            </View>
          </View>
        </View>
      )}
      horizontal
    />

              
    </SafeAreaView>
  );
};

export default Home;