import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

const AddGoalInput = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const changeTextHandler = (text) => {
    setEnteredText(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Goal"
        style={styles.input}
        onChangeText={changeTextHandler}
        value={enteredText}
      />
      <Button title="ADD" onPress={props.setGoal.bind(this, enteredText)} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default AddGoalInput;
