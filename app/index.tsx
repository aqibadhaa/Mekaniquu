import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { ScrollView, Text, TextInput, View } from "react-native";
import { IconButton } from "react-native-paper";
import "tailwind-merge";
import "tailwind-variants";
import { tv } from "tailwind-variants";

import "./globals.css";

const searchBoxStyles = tv({
  slots: {
    mainContainer: "flex-1 mt-16 px-8",
    searchBoxContainer: "flex-row items-center",
    searchBox: "flex-1 ml-[1px] flex-row items-center h-14 border border-gray-300 px-4 bg-neutral-100 rounded-full shadow-lg",
  }
});



export default function App() {
  const { mainContainer, searchBoxContainer, searchBox } = searchBoxStyles();





  const [loaded] = useFonts({
    PetitRegular: require("../assets/fonts/PetitFormalScript-Regular.ttf"),
    Carattere: require("../assets/fonts/Carattere-Regular.ttf"),
    Lobster: require("../assets/fonts/Lobster-Regular.ttf"),
    WinskyBold: require("../assets/fonts/WinkySans-Bold.ttf"),
    WinskyLightItalic: require("../assets/fonts/WinkySans-LightItalic.ttf"),
  });

  if (!loaded) return null; // atau bisa pake splash/loading

  return (
    <View className={mainContainer()}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View className={searchBoxContainer()}>
          <View className={searchBox()}>
            <Ionicons name="search" size={20} color="gray" style={{ marginRight: 15 }} />
            <TextInput
              placeholder="Mau cari apa?"
              placeholderTextColor="gray"
              style={{ flex: 1, fontSize: 14, fontWeight: '500' }}
            />
          </View>
          <IconButton icon="menu" />
        </View>

        <View className="flex-1 bg-red-200 mt-10">
          <Text className="text-2xl font- text-blue-500 font-petit p-10">
            Ready Anytime You Need!
          </Text>
        </View>

        <View className="flex-1 bg-red-200">
          <Text className="text-2xl font- text-blue-500 font-carattere p-10">
            Ready Anytime You Need!
          </Text>
        </View>

        <View className="flex-1 bg-red-200">
          <Text className="text-2xl font- text-blue-500 font-lobster p-10 ">
            Ready Anytime You Need!
          </Text>
        </View>

        <View className="flex-1 bg-red-200">
          <Text className="text-2xl font- text-blue-500 font-winskyBold p-10">
            Ready Anytime You Need!
          </Text>
        </View>

        <View className="flex-1 bg-red-200">
          <Text className="text-2xl font- text-blue-500 font-winskyLightItalic p-10">
            Ready Anytime You Need!
          </Text>
        </View>


      </ScrollView>
    </View>
  );
}



