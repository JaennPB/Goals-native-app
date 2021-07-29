import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

const App = () => {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);

  const changeEnteredTextHandler = (text) => {
    setEnteredText(text);
  };

  const setGoalsHandler = () => {
    setGoals((oldState) => [
      ...oldState,
      { key: Math.random().toString(), name: enteredText },
    ]);
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal"
          style={styles.input}
          onChangeText={changeEnteredTextHandler}
          value={enteredText}
        />
        <Button title="ADD" onPress={setGoalsHandler} />
      </View>
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <View style={styles.goalContainer}>
            <Text>{itemData.item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "80%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  goalContainer: {
    padding: 10,
    borderLeftWidth: 1,
    borderColor: "blue",
    marginBottom: 10,
  },
});

export default App;
