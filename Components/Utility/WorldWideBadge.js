import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WorldWideBadge = (props) => {
  const { title, fig, subfig } = props;

  let primary = "white";
  if (title === "Recovered") primary = "#43E73F";
  if (title === "Deaths") primary = "#F05454";
  if (title === "Active") primary = "#BBE1FA";

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: primary }]}>{title}</Text>
      <Text style={[styles.fig, { color: primary }]}>{fig}</Text>
      <Text style={[styles.subfig, { color: primary }]}>+{subfig}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F4C75",
    width: 180,
    height: 82,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 14,
    shadowColor: "#rgba(0,0,0,0.50)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.50,
    shadowRadius: 2,
    elevation: 4,
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
  },
  fig: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subfig: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default WorldWideBadge;
