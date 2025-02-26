import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 0,
    padding: 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
    paddingHorizontal: 16,
    marginTop: Platform.OS === "android" ? 15 : 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7F265B",
    textAlign: "center",
  },
  logoutIcon: {
    width: 24,
    height: 24,
    tintColor: "#7F265B",
  },
  ProfileIcon: {
    width: 30,
    height: 30,
    tintColor: "#7F265B",
  },
  listContent: {
    paddingBottom: 60,
    marginTop: "8%",
  },
  taskItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskContent: {
    flexDirection: "column",
  },
  taskName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0.5%",
  },
  taskDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: "0.5%",
  },
  plusImg: {
    width: 50,
    height: 50,
    tintColor: "#7F265B",
  },
  addView: {
    position: "absolute",
    right: 30,
    bottom: 40,
    zIndex: 100,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "80%",
  },
  emptyText: {
    fontSize: 25,
    color: "#7F265B",
    fontWeight: "bold",
  },
  borderView: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(200, 200, 200, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  rowBack: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: "100%",
  },
  completeButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: "40%",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  deleteIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor:'red'
  },
});
