import React from "react";
import { View, Button } from "react-native";

const AddAndCancelButton = ({ addTodoHandler, setModalVisible }) => {
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
        justifyContent: "center",
      }}
    >
      <Button onPress={addTodoHandler} title="Add Todo" />
      <Button title="Cancel" onPress={() => setModalVisible(false)} />
    </View>
  );
};

export default AddAndCancelButton;
