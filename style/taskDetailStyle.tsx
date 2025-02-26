import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f8f9fa",
      paddingTop: 10,
    },
    card: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      marginTop: "9%",
      marginHorizontal: 20,
      borderWidth: 1,
      borderColor: "#7F265B",
    },
    section: {
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#7F265B",
      marginBottom: 5,
    },
    value: {
      fontSize: 16,
      color: "#000",
      fontWeight: "500",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingBottom: 20,
      backgroundColor: "#fff",
      paddingTop: Platform.OS === "android" ? 10 : 5,
    },
    backArrow: {
      width: 20,
      height: 20,
      tintColor: "#7F265B",
    },
    title: {
      fontSize: 23,
      fontWeight: "bold",
      color: "#7F265B",
      textAlign: "center",
      // width: "90%",
      // right: "4%",
    },
    borderView: {
      borderBottomWidth: 1,
      borderBottomColor: "gray",
    },
    iconContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    icon: {
      width: 24,
      height: 24,
      tintColor: "#7F265B",
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
    backView:{
      paddingHorizontal:4,
      paddingVertical:4
    }
  });
  