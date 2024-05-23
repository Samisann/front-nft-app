import { Link } from 'expo-router';
import { Image, View,Text,  } from 'react-native';


export default function Home() {
  return (
   <View className="flex-1 items-center justify-center ">
 
     
      
        
        <Text className="text-3xl font-pblack">Welcome to Expo Tailwind CSS</Text>
        <Link href={"/profile"} className="text-3xl">profile</Link>

      </View>
    
  
  )};
