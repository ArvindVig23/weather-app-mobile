// src/styles/global.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // full-screen container with white background
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50, // adjust as needed for status bar
  },

  // utility to center content
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // card style for weather display panels
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    // shadow for iOS
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // elevation for Android
    elevation: 3,
  },

  // title text (e.g., location name)
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
    color: "#000", // dark text on white
  },

  // body text (e.g., temperature, humidity)
  text: {
    fontSize: 16,
    color: "#000",
  },
});
