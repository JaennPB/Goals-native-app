import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const AddGoalInput = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const changeTextHandler = (text) => {
    setEnteredText(text);
  };

  const addGoalHandler = () => {
    props.setGoal(enteredText);
    setEnteredText("");
  };

  return (
    <Modal visible={props.modalVisible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Goal"
            style={styles.input}
            onChangeText={changeTextHandler}
            value={enteredText}
            autoFocus={true}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button title="CANCEL" onPress={props.closeModal} color="red" />
            </View>
            <View style={styles.button}>
              <Button title="ADD" onPress={addGoalHandler} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inputContainer: {
    padding: 30,
    width: "100%",
    backgroundColor: "white",
  },
  input: {
    width: "100%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
});

export default AddGoalInput;
