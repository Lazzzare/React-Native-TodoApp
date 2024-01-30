import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const addTodoHandler = () => {
    if (value.length > 0) {
      setTodos([...todos, { id: todos.length + 1, title: value }]);
      setValue("");
    } else {
      alert("its empty bro");
    }
  };

  const deleteTodoHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>TodoApp</Text>
      <Modal>
        <TextInput
          onChangeText={(text) => setValue(text)}
          value={value}
          style={styles.input}
          placeholder="Enter todo"
        />
      </Modal>
      <Button onPress={addTodoHandler} title="Add Todo" />
      <View style={{ gap: 10, marginTop: 20 }}>
        {todos.map((todo) => (
          <View style={styles.todoContainer}>
            <Text key={todo.id}>{todo.title}</Text>
            <TouchableOpacity onPress={() => deleteTodoHandler(todo.id)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
  },
  todoContainer: {
    flexDirection: "row",
    width: "70%",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "space-between",
  },
});
