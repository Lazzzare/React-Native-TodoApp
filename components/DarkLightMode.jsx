import React from "react";
import { View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const DarkLightMode = ({ setDarkMode, darkMode }) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 40,
        right: 40,
      }}
    >
      {darkMode ? (
        <Pressable onPress={() => setDarkMode(!darkMode)}>
          <Feather name="sun" size={40} color="white" />
        </Pressable>
      ) : (
        <Pressable onPress={() => setDarkMode(!darkMode)}>
          <Feather name="moon" size={40} color="black" />
        </Pressable>
      )}
    </View>
  );
};

export default DarkLightMode;
