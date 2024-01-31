import React from "react";
import { View, Button, Pressable } from "react-native";

const AddNewTodoButton = ({ setModalVisible }) => {
  return (
    <View style={{ alignItems: "center", borderRadius: 20 }}>
      <Button title="Add new todo" onPress={() => setModalVisible(true)} />
    </View>
  );
};

export default AddNewTodoButton;
