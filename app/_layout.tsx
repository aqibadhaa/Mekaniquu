import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (<GestureHandlerRootView style={{ flex: 1 }}>
    <PaperProvider>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "#26344f",
          tabBarStyle: {
            position: "absolute",
            bottom: 20,
            borderRadius: 50,
            height: 53,
            paddingTop: 7,
            paddingBottom: 7,
            marginBottom: 15,
            elevation: 10,
            shadowColor: 'black',
            shadowOffset: { width: 0.1, height: 10 },
            shadowOpacity: 100,
            shadowRadius: 150,

          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color="#635072ff"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="cartScreen"
          options={{
            title: "Cart Screen",
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={size}
                color="#635072ff"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="discover"
          options={{
            title: "Discover",
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "map" : "map-outline"}
                size={size}
                color="#635072ff"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="transactionScreen"
          options={{
            title: "transactionScreen",
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "receipt" : "receipt-outline"}
                size={size}
                color="#635072ff"
              />
            ),
          }}
        />


      </Tabs>
    </PaperProvider>
  </GestureHandlerRootView>);
}
