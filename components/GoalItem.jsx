import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteItem }) => {
  return (
    <Pressable onPress={onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
});
