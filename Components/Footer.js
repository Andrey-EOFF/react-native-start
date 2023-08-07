import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <Ionicons name="albums-outline" size={24} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButtonAdd}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
        <Ionicons name="person" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  footerButtonAdd: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
});

export default Footer;
