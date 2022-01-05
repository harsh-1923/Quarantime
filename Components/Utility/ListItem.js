import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ListItem = ({ country, deaths, active, url, cases, recovered, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.countryDeatails}>
          <Image style={styles.flag} source={{ uri: url }} />
          <Text style={styles.countryName}>{country}</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.totalText}>{cases}</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.deaths}>
          <Text style={styles.deathText}>{deaths}</Text>
        </View>
        <View style={styles.recovered}>
          <Text style={styles.recoveredText}>{recovered}</Text>
        </View>
        <View style={styles.active}>
          <Text style={styles.activeText}>{active}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F4C75",
    width: "100%",
    height: 90,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#rgba(0,0,0,0.50)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  countryDeatails: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  flag: {
    backgroundColor: "yellow",
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  countryName: {
    marginLeft: 10,
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },
  totalText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  deathText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#F05454",
  },
  activeText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#BBE1FA",
  },
  recoveredText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#43E73F",
  },
});
