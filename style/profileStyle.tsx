import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: "20%",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#7F265B",
  },
  initialsContainer: {
    width: 110,
    height: 110,
    borderRadius: 60,
    backgroundColor: "#7F265B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#fff",
  },
  initialsText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  email: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#7F265B",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: "5%",
    marginTop: "15%",
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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
    width: 24,
    height: 24,
    tintColor: "#7F265B",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7F265B",
    textAlign: "center",
    width: "90%",
    right: "4%",
  },
  borderView: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    borderColor: "#7F265B",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    fontWeight:'500',
    paddingVertical: Platform.OS === "android" ? 12 : 13,
  },
  inputView: {
    marginBottom: "2%",
    fontSize: 18,
    color: "#7F265B",
    fontWeight: "700",
    marginTop: "3%",
  },
  logoutView:{backgroundColor:'white', paddingBottom:10}
});
