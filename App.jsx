import { StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import Title from "./components/Title";
import AddNewTodoButton from "./components/AddNewTodoButton";
import ModalBox from "./components/Modal/ModalBox";
import Todos from "./components/Todos";
import DarkLightMode from "./components/DarkLightMode";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const addTodoHandler = () => {
    if (value.length > 0) {
      setTodos([...todos, { id: todos.length + 1, title: value }]);
      setValue("");
      setModalVisible(false);
    } else {
      alert("its empty bro");
    }
  };

  const deleteTodoHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        { backgroundColor: darkMode ? "#1a171c" : "white" },
      ]}
    >
      {/* TodoTitle */}
      <Title darkMode={darkMode} />
      {/* TodoAddPressableButton */}
      <AddNewTodoButton setModalVisible={setModalVisible} />
      {/* Modal */}
      <ModalBox
        modalVisible={modalVisible}
        setValue={setValue}
        addTodoHandler={addTodoHandler}
        setModalVisible={setModalVisible}
        darkMode={darkMode}
        value={value}
      />
      {/* AllTodos */}
      <Todos
        todos={todos}
        deleteTodoHandler={deleteTodoHandler}
        darkMode={darkMode}
      />
      {/* DarkMode */}
      <DarkLightMode darkMode={darkMode} setDarkMode={setDarkMode} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
