import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  const [checked, setChecked] = useState(false);

  const handleToggleCheck = () => {
    setChecked(!checked);
  };

  const handleDeleteTask = () => {
    props.onDeleteTask();
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={handleToggleCheck}>
        <View
          style={[styles.checkbox, checked ? styles.checkedCheckbox : null]}
        />
      </TouchableOpacity>
      <Text style={[styles.itemText, checked ? styles.checkedItemText : null]}>
        {props.text}
      </Text>
      <TouchableOpacity onPress={handleDeleteTask}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemText: {
    maxWidth: "80%",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#55BCF6",
    marginRight: 15,
  },
  checkedCheckbox: {
    backgroundColor: "#55BCF6",
  },
  checkedItemText: {
    textDecorationLine: "line-through",
    color: "#BDBDBD",
  },
  delete: {
    color: "#f00",
    fontWeight: "bold",
    fontSize: 20,
    padding: 2,
    paddingHorizontal: 6,
    borderRadius: 7,
  },
});

export default Task;
