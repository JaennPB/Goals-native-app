import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import AddGoalInput from "./components/AddGoalInput";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const setGoalsHandler = (title) => {
    setGoals((oldState) => [
      ...oldState,
      { key: Math.random().toString(), name: title },
    ]);
    setModalVisible(false);
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((oldState) => {
      return oldState.filter((goal) => goal.key !== goalId);
    });
  };

  const toggleModalHandler = () => {
    setModalVisible((oldState) => !oldState);
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              title={itemData.item.name}
              deleteGoal={deleteGoalHandler}
              id={itemData.item.key}
            />
          )}
        />
      </View>
      <View style={styles.inputContainer}>
        <Button title="ADD A GOAL" onPress={toggleModalHandler} />
        <AddGoalInput
          setGoal={setGoalsHandler}
          modalVisible={modalVisible}
          closeModal={toggleModalHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "space-between",
    alignItems: "center",

    paddingTop: 50,
    paddingHorizontal: 30,
  },
  listContainer: {
    height: "90%",
    width: "100%",
  },
  inputContainer: {
    height: "10%",
    width: "100%",
  },
});

export default App;
