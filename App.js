import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LaptopList } from "./screens/LaptopList";

export default function App() {
  const StackLaptops = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackLaptops.Navigator>
          <StackLaptops.Screen
            name="LaptopListNav"
            component={LaptopList}
          />
        </StackLaptops.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

