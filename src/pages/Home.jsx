import React, { useState } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { data } from "../database/data";

import Tasks from "../components/Tasks";

const Home = () => {
  const navigation = useNavigation();
  let dataDinamis = data;

  const [task, setTask] = useState("");
  const [ditail, setDitail] = useState("");

  const addTask = () => {
    Keyboard.dismiss();
    dataDinamis.push({
      title: task,
      ditail: ditail,
    });
    setDitail(null);
    setTask(null);
    console.log(dataDinamis);
  };

  return (
    <View className="flex-1">
      <View className="mx-9 pt-5 pb-3">
        <Text className="text-lg font-bold">your Tasks</Text>
        <View className="mt-10">
          <ScrollView
            className="max-h-44"
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            {dataDinamis.map((item, index) => {
              console.log(item);
              console.log(index);
              {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Detail", { item })}
                  >
                    <Tasks text={item.title} key={index} />
                  </TouchableOpacity>
                );
              }
            })}
          </ScrollView>
        </View>
      </View>

      <KeyboardAvoidingView
        className="flex-1 justify-center items-center  bg-red-300 rounded-t-xl"
        style={{
          height: 650,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4.5,
          elevation: 5,
        }}
      >
        <View className="w-full justify-center  bg-red-300 rounded-t-xl">
          <ScrollView>
            <View className="justify-around items-center w-full">
              <View className="w-full px-5">
                <Text className="font-bold text-xl">Judul</Text>
              </View>
              <TextInput
                className="px-3 py-3 rounded-2xl w-11/12 text-lg font-bold"
                style={{ backgroundColor: "#fff", borderColor: "#C0C0C0" }}
                value={task}
                onChangeText={(text) => setTask(text)}
              />
              <View className=" mt-5 w-full px-5">
                <Text className="font-bold text-xl">Detail </Text>
              </View>
              <TextInput
                numberOfLines={4}
                className="px-3 py-3 rounded-2xl w-11/12 text-lg"
                style={{ backgroundColor: "#fff", borderColor: "#C0C0C0" }}
                value={ditail}
                onChangeText={(text) => setDitail(text)}
              />
            </View>
            <TouchableOpacity
              className="px-2 py-4 my-7 rounded-2xl  mx-auto w-7/12 "
              style={{ backgroundColor: "#FF7461" }}
              onPress={() => addTask()}
            >
              <Text className="text-white text-center font-bold">Tambah</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;
