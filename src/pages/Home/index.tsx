import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Shoes from "../../components/Shoes";
import {useNavigation} from '@react-navigation/native'


export default function Home() {
  
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.imageBanner}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: "#cecece" }]}>-</Text>
          <Text style={[styles.text, { color: "#cecece" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes img={require("../../assets/1.png")} cost="199,90"  onClick={() => navigation.navigate('Detail')}>
            Tênis da Nike
          </Shoes>
          <Shoes img={require("../../assets/2.png")} cost="199,90"  onClick={() => navigation.navigate('Detail')}>
            Tênis da Nike
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes img={require("../../assets/3.png")} cost="199,90"  onClick={() => navigation.navigate('Detail')}>
            Tênis da Nike
          </Shoes>
          <Shoes img={require("../../assets/4.png")} cost="299,99"  onClick={() => navigation.navigate('Detail')}>
            Tênis da Nike
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes img={require("../../assets/5.png")} cost="580,90" onClick={() => navigation.navigate('Detail')}>
            Tênis da Nike
          </Shoes>
          <Shoes img={require("../../assets/6.png")} cost="220,90"  onClick={() => navigation.navigate('Detail')}>
            Tênis da Nike
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
  },

  header: {
    marginBottom: 8,
  },

  imageBanner: {
    width: "100%",
  },

  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },

  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "1%",
  },

  line: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
  },
});
