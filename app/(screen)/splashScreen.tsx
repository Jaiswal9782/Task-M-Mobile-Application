import { View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { styles } from '@/style/splashStyle';

const splashScreen = () => {
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
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        if (token) {
          router.push("/homeScreen");
        } else {
          router.push("/login");
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }, [token]);
  
    return (
      <View
        style={styles.container}
      >
        <Image
          source={require("../../assets/images/logo4.jpeg")}
          style={styles.logo}
        />
      </View>
    );
}

export default splashScreen