import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header.js";
import WorldWide from "./Components/WorldWide.js";
import CountryList from "./Components/CountryList.js";


export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <WorldWide />
        <CountryList />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BBE1FA",
    paddingTop: 48,
  },
});
