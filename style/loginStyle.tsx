import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#7F265B",
    },
    inputBox: {
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingHorizontal: "5%",
      marginVertical: 10,
      borderWidth: 1,
      borderColor: "#7F265B",
      height:hp(6)

    },
    inputBox1: {
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingHorizontal: "5%",
      marginVertical: 10,
      borderWidth: 1,
      borderColor: "#7F265B",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height:hp(6)


    },
    input: {
      fontSize: 16,
      color: "#333",
      flex: 1,
    },
    loginButton: {
      backgroundColor: "#7F265B",
      paddingHorizontal: "10%",
      paddingVertical: "4%",
      borderRadius: 8,
      alignItems: "center",
      marginTop: 20,
    },
    loginButtonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    loginContainer: {
      flexDirection: "row",
      marginTop: 20,
      alignItems: "center",
    },
    loginText: {
      fontSize: 16,
      color: "#333",
      marginRight: 5,
    },
    loginLink: {
      fontSize: 16,
      color: "#7F265B",
      fontWeight: "bold",
    },
    loaderOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(200, 200, 200, 0.5)",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
  });