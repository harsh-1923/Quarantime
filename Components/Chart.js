import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";

const Chart = ({ country }) => {
  const { width: SIZE } = Dimensions.get("window");

  const [isLoading, setLoading] = useState(true);
  const [dummy, setDummy] = useState([]);

  useEffect(() => {
    fetch(
      "https://disease.sh/v3/covid-19/vaccine/coverage/countries/"+country+"?lastdays=5&fullData=true"
    )
      .then((response) => response.json())
      .then((json) => setDummy(json.timeline))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(dummy)

  for(var each in dummy){
    console.log(dummy)
  }



  const data = [
    { x: 1, y: 507657980 },
    { x: 2, y: 507657980 },
    { x: 3, y: 507657980 },
    { x: 4, y: 507657980 },
    { x: 5, y: 507657980 },
  ];

  const points = monotoneCubicInterpolation({ data, range: 40 });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vacination status of {country}</Text>
      <View style={styles.chart}>
        <ChartPathProvider data={{ points, smoothingStrategy: "bezier" }}>
          <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
          <ChartDot style={{ backgroundColor: "red" }} />
        </ChartPathProvider>
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  chart: {
    backgroundColor: "#fff",
    marginTop: 40,
  },
});
