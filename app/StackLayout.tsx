import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StackLayout() {
  const colorScheme = useColorScheme();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("token");
        setToken(storedUser);
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };
    loadUserData();
  }, [AsyncStorage]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
        },
        headerTintColor: colorScheme === "dark" ? "#fff" : "#000",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
       name="splashScreen"
       options={{
         title: "splashScreen",
       }}
      
      />
       <Stack.Screen
        name="login"
        options={{
          title: "Login",
        }}
      />
       <Stack.Screen
        name="signupScreen"
        options={{
          title: "SignupScreen",
          headerShown:false
        }}
        
      />
     
      <Stack.Screen
        name="homeScreen"
        options={{
          title: "HomeScreen",
        }}
      />
      <Stack.Screen
        name="taskScreen"
        options={{
          title: "TaskScreen",
        }}
      />
      <Stack.Screen
        name="taskDetail"
        options={{
          title: "TaskDetail",
        }}
      />
       <Stack.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Stack>
  );
}
