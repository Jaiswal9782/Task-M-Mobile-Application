import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#fff",
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#fff",
      marginTop: "10%",
    },
    heading: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: "10%",
      textAlign: "center",
      color: "#7F265B",
    },
    input: {
      borderWidth: 1,
      borderColor: "#7F265B",
      borderRadius: 8,
      padding: 10,
      marginBottom: "8%",
      paddingVertical: Platform.OS === "android" ? 12 : 15,
    },
    textArea: {
      paddingVertical: Platform.OS === "android" ? 12 : 15,
    },
    dropdownContainer: {
      marginBottom: 20,
    },
    dropdownButton: {
      borderWidth: 1,
      borderColor: "#7F265B",
      borderRadius: 8,
      padding: 12,
      backgroundColor: "#f9f9f9",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    dropdownButtonText: {
      fontSize: 16,
      color: "#333",
    },
    dropdownList: {
      position: "absolute",
      top: 50,
      left: 0,
      width: "100%",
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#7F265B",
      borderRadius: 8,
      zIndex: 1000,
    },
    dropdownItem: {
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: "#7F265B",
    },
    dropdownItemText: {
      fontSize: 16,
      color: "#333",
    },
    button: {
      backgroundColor: "#7F265B",
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
      marginTop: "10%",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
      marginTop: Platform.OS === "android" ? 15 : 5,
    },
    backArrow: {
      width: 20,
      height: 20,
      tintColor: "#7F265B",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#7F265B",
      textAlign: "center",
      width: "93%",
      right: "3%",
    },
    dropdownIcon: {
      width: 16,
      height: 16,
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
    backview:{
      paddingHorizontal:4,
      paddingVertical:4
    },
    inputView: {
      marginBottom: "2%",
      fontSize: 18,
      color: "#7F265B",
      fontWeight: "700",
    },
    borderView: {
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      marginTop:'4%'
    },
  });