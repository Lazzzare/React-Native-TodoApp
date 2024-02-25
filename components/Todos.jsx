import {
  FlatList,
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";

const Todos = ({ todos, deleteTodoHandler, darkMode }) => {
  return (
    <View
      style={{
        gap: 10,
        marginTop: 20,
        flex: 1,
        width: "100%",
      }}
    >
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(todo) => (
          <View
            style={[
              styles.todoContainer,
              {
                borderColor: darkMode ? "white" : "black",
              },
            ]}
          >
            <Text
              style={[
                styles.todoTitle,
                { color: darkMode ? "white" : "#1a171c" },
              ]}
            >
              {todo.item.title}
            </Text>
            <Pressable
              android_ripple={{ color: "#ccc" }}
              onPress={() => deleteTodoHandler(todo.item.id)}
            >
              <Text
                style={[
                  styles.deleteButton,
                  { color: darkMode ? "white" : "black" },
                ]}
              >
                X
              </Text>
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
    flex: 1,
    margin: "auto",
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
  todoTitle: {
    fontSize: 20,
  },
});
