import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputField = ({ setValue, value, darkMode }) => {
  return (
    <TextInput
      onChangeText={(text) => setValue(text)}
      value={value}
      style={[
        styles.input,
        {
          borderColor: darkMode ? "white" : "#1a171c",
          backgroundColor: darkMode ? "white" : "white",
        },
      ]}
      placeholder="Enter todo"
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 300,
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
  },
});
