import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ComplateTask from "../components/ComplateTask";

const Detail = ({ route, natvigation }) => {
  const { base } = route.params;
  console.log(base);
  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-red-200 rounded-3xl p-10 w-9/12 h-4/5">
        <View className="w-full">
          <Text className="font-bold text-xl">Judul</Text>
        </View>
        <Text>{base.title}</Text>
        <View className="w-full mt-10">
          <Text className="font-bold text-xl">Detail</Text>
        </View>
        <Text>{base.ditail}</Text>
      </View>
      {/* <ComplateTask index={base.index} dataBase={base.data} /> */}
    </View>
  );
};

export default Detail;
