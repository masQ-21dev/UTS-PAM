import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";

import ComplateTask from "./ComplateTask";

const Tasks = (props) => {
  console.log(props.index);
  return (
    <View className="bg-white rounded-xl flex-row items-center justify-between p-3 mb-5">
      <View className="flex-row items-center flex-wrap">
        <View
          style={{
            width: 24,
            height: 24,
            backgroundColor: "#55BCF6",
            opacity: 0.4,
            borderRadius: 5,
            marginRight: 15,
          }}
        ></View>
        <Text style={{ maxWidth: 80 }}>{props.text}</Text>
      </View>
      <ComplateTask index={props.index} dataBase={props.dataBase} />
    </View>
  );
};

export default Tasks;
