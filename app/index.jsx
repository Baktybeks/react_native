import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-3xl font-pblack">BIS</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-blue-600">
        Go to Profile
      </Link>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     color: "red",
//   },
// });
