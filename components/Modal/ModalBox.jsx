import React from "react";
import { View, Button, SafeAreaView, Modal, StyleSheet } from "react-native";
import InputField from "./InputField";
import AddAndCancelButton from "./AddAndCancelButton";

const ModalBox = ({
  modalVisible,
  setValue,
  addTodoHandler,
  setModalVisible,
  darkMode,
  value,
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <SafeAreaView
        style={[
          styles.inputContainer,
          { backgroundColor: darkMode ? "#1a171c" : "white" },
        ]}
      >
        <InputField setValue={setValue} value={value} darkMode={darkMode} />
        <AddAndCancelButton
          addTodoHandler={addTodoHandler}
          setModalVisible={setModalVisible}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default ModalBox;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
