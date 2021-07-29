import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalContainer}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    padding: 10,
    borderLeftWidth: 1,
    borderColor: "blue",
    marginBottom: 10,
  },
});

export default GoalItem;
