import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

function index() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Ev</Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 11.5,
              color: "#6E7480",
              marginLeft: 6,
              marginRight: 1,
            }}
          >
            Denizevler Mahallesi, Denizevler Caddesi...
          </Text>
          <Entypo name="chevron-right" size={22} color="#5D3EBD" />
        </View>

        <View style={styles.headerTwo}>
          <Text
            style={{
              fontSize: 10,
              color: "#5D3EBD",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            TVS
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#5D3EBD",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            21
            <Text
              style={{
                fontSize: 16,
                color: "#5D3EBD",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              dk
            </Text>
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default index;
