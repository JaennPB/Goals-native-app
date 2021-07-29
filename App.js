import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import AddGoalInput from "./components/AddGoalInput";

const App = () => {
  const [goals, setGoals] = useState([]);

  const setGoalsHandler = (title) => {
    setGoals((oldState) => [
      ...oldState,
      { key: Math.random().toString(), name: title },
    ]);
  };

  return (
    <View style={styles.screenContainer}>
      <AddGoalInput setGoal={setGoalsHandler} />
      <FlatList
        data={goals}
        renderItem={(itemData) => <GoalItem title={itemData.item.name} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});

export default App;
