import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

function HookProblem() {
  const [darkMode, setDarkMode] = useState(false);
  const styles = useStyles(darkMode);

  return (
    <View style={styles.con}>
      <Text style={styles.text}>
        {darkMode ? "That's Dark Mode" : "That's Light Mode"}
      </Text>
      <Button title="Dark Mode" onPress={() => setDarkMode(true)} />
      <Button title="Light Mode" onPress={() => setDarkMode(false)} />
    </View>
  );
}

function useStyles(darkMode) {
  return StyleSheet.create({
    con: {
      backgroundColor: darkMode ? "black" : "#ffd",
      flex: 1,
      justifyContent: "center",
    },
    text: {
      textAlign: "center",
      color: darkMode ? "white" : "black",
      paddingBottom: 15,
    },
  });
}

export default HookProblem;
