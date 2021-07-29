import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalContainer}>
      <Text style={styles.text}>{props.title}</Text>
      <Button
        title="DELETE"
        color="red"
        onPress={props.deleteGoal.bind(this, props.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 20,
    borderLeftWidth: 1,
    borderColor: "blue",
  },
  text: {
    paddingLeft: 10,
  },
});

export default GoalItem;
