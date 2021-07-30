import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Dashboard = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.message}>What's Next?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  welcome: {
    fontSize: 30,
    marginBottom: 30,
  },
  message: {
    fontSize: 15,
  },
});

export default Dashboard;
