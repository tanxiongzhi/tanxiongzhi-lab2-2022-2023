import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function MovieList({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        This is MovieList
      </Text>
      <TouchableOpacity onPress={() => {
          navigation.navigate('MovieDetail')
      }} style={{
          backgroundColor: 'blue',
          paddingHorizontal: 20,
          paddingVertical: 5
      }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFF'
          }}
        >
          Go to MovieDetail
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default MovieList;
