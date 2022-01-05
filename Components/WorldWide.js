import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import WorldWideBadge from "./Utility/WorldWideBadge";

const WorldWide = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <WorldWideBadge title="Total" fig={data.cases} subfig={data.todayCases}/>
        <WorldWideBadge title="Recovered" fig={data.recovered} subfig={data.todayRecovered}/>
      </View>
      <View style={styles.bottomContainer}>
        <WorldWideBadge title="Deaths" fig={data.deaths} subfig={data.todayDeaths} />
        <WorldWideBadge title="Active" fig={data.active} subfig={data.activePerOneMillion} />
      </View>
    </View>
  );
};

export default WorldWide;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  topContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 15,
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
