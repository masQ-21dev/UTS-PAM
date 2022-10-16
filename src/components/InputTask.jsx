import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

// import { data } from "../database/data";

// import dataDinamis from "../pages/Home";

const InputTask = (props) => {
  const [task, setTask] = useState("");
  const [ditail, setDitail] = useState("");

  const addTask = () => {
    Keyboard.dismiss();
    props.Data.push({
      title: task,
      ditail: ditail,
    });
    setDitail(null);
    setTask(null);
    console.log(props.Data);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <View className="justify-around items-center w-full">
        <View className="w-full px-5">
          <Text className="font-bold text-xl">Judul :</Text>
        </View>
        <TextInput
          className="px-3 py-3 rounded-2xl w-11/12 text-lg font-bold"
          style={{ backgroundColor: "#fff", borderColor: "#C0C0C0" }}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <View className=" mt-5 w-full px-5">
          <Text className="font-bold text-xl">Ditail :</Text>
        </View>
        <TextInput
          multiline={true}
          numberOfLines={4}
          className="px-3 py-3 rounded-2xl w-11/12 text-lg"
          style={{ backgroundColor: "#fff", borderColor: "#C0C0C0" }}
          value={ditail}
          onChangeText={(text) => setDitail(text)}
        />
      </View>
      <TouchableOpacity
        className="px-2 py-4 my-7 rounded-2xl  mx-5 w-7/12"
        style={{ backgroundColor: "#FF7461" }}
        onPress={() => addTask()}
      >
        <Text className="text-white text-center font-bold">Tambah</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputTask;
