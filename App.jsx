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
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  console.log(darkMode);

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
      <Text style={[styles.title, { color: darkMode ? "white" : "#1a171c" }]}>
        TodoApp
      </Text>
      <Button title="Add new todo" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView
          style={[
            styles.inputContainer,
            { backgroundColor: darkMode ? "#1a171c" : "white" },
          ]}
        >
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
        </SafeAreaView>
      </Modal>
      <View style={{ gap: 10, marginTop: 20 }}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(todo) => (
            <View style={styles.todoContainer}>
              <Text>{todo.item.title}</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    fontSize: 40,
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 300,
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
  },
  todoContainer: {
    flexDirection: "row",
    marginHorizontal: 40,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
