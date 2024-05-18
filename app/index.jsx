import { Text, View, } from "react-native";
import HomeScreen from "./(tabs)/home";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomeScreen />
  
    </View>
  );
}
