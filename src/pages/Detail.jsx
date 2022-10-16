import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Detail = ({ route, natvigation }) => {
  const { item } = route.params;
  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-red-200 rounded-3xl p-10 w-9/12 h-4/5">
        <View className="w-full">
          <Text className="font-bold text-xl">Judul</Text>
        </View>
        <Text>{item.title}</Text>
        <View className="w-full mt-10">
          <Text className="font-bold text-xl">Detail</Text>
        </View>
        <Text>{item.ditail}</Text>
      </View>
    </View>
  );
};

export default Detail;
