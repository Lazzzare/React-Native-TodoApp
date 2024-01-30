import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
  Pressable,
  FlatList,
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
    <View style={styles.mainContainer}>
      <Text style={styles.title}>TodoApp</Text>
      <Button title="Add new todo" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <TextInput
          onChangeText={(text) => setValue(text)}
          value={value}
          style={styles.input}
          placeholder="Enter todo"
        />
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
      </Modal>
      <View style={{ gap: 10, marginTop: 20 }}>
        <FlatList
          data={todos}
          renderItem={(todo) => (
            <View style={styles.todoContainer}>
              <Text key={todo.item.id}>{todo.item.title}</Text>
              <Pressable
                android_ripple={{ color: "#ccc" }}
                onPress={() => deleteTodoHandler(todo.item.id)}
              >
                <Text style={styles.deleteButton}>X</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
  },
  todoContainer: {
    flexDirection: "row",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "space-between",
  },
});
