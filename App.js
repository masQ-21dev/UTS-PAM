import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Detail from "./src/pages/Detail";

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Detail" component={Detail} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
