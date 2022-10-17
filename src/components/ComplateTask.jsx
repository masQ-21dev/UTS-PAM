import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { data } from "../database/data";

const ComplateTask = (props) => {
  const [deleteItem, setDeleteItem] = useState();
  const navigation = useNavigation();
  const DeleteTask = (index) => {
    setDeleteItem(props.dataBase[index]);
    delete props.dataBase[index];

    // let itemsCopy = [...props.dataBase];
    // itemsCopy.splice(index, 1);
    // JSON.parse(itemsCopy);
    // props.dataBase = [...itemsCopy];
    // props.dataBase.push({
    //   title: "task",
    //   ditail: "ditail",
    // });
    console.log(props.dataBase);
    alert(`$props.dataBase[index]` + " success delete");
    navigation.navigate("Home");
  };
  return (
    <TouchableOpacity
      onPress={() => DeleteTask(props.index)}
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
