import React from "react";
import { FlatList, View, Text, Pressable, StyleSheet } from "react-native";

const Todos = ({ todos, deleteTodoHandler }) => {
  return (
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
  );
};

export default Todos;

const styles = StyleSheet.create({
  todoContainer: {
    alignItems: "center",
    justifyContent: "center",
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
