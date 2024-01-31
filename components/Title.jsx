import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = ({ darkMode }) => {
  return (
    <Text style={[styles.title, { color: darkMode ? "white" : "#1a171c" }]}>
      TodoApp
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 40,
    marginBottom: 20,
    textAlign: "center",
  },
});
