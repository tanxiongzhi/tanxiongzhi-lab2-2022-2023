import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function MovieDetail({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        This is MovieDetail
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack("MovieList");
        }}
        style={{
          backgroundColor: "blue",
          paddingHorizontal: 20,
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#FFF",
          }}
        >
          Go to MovieList
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default MovieDetail;
