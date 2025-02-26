import { View } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";

const index = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/splashScreen");
    }, 50);
    return () => clearTimeout(timeout);
  }, []);
  return <>

  </
  >;
};

export default index;
