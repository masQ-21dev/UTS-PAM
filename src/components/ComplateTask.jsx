import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { data } from "../database/data";

const ComplateTask = (props) => {
  const DeleteTask = (index) => {
    let itemsCopy = data;
    itemsCopy.splice(index, 1);
    data = [...itemsCopy];
  };
  return (
    <TouchableOpacity
      onPress={() => DeleteTask(props.key)}
      style={{
        width: 25,
        height: 25,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
      }}
    >
      <Text className="font-bold text-center">X</Text>
    </TouchableOpacity>
  );
};

export default ComplateTask;
