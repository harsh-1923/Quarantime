import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Vaccine = ({ country, population }) => {
  const [isLoading, setLoading] = useState(true);
  const [dummy, setDummy] = useState({});
  const [doses, setDoses] = useState(0);
  const [newDoses, setNewDoses] = useState(0);


  const setdata = (data) => {
    setDoses(data[0].total);
    setNewDoses(data[0].daily === 0 ? "Not available" : data[0].daily);
  }

  useEffect(() => {
    fetch(
      "https://disease.sh/v3/covid-19/vaccine/coverage/countries/" +
        country +
        "?lastdays=5&fullData=true"
    )
      .then((response) => response.json())
      .then((json) => setdata(json.timeline))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(dummy);
  console.log(doses, "doses");
  console.log(newDoses, "new doses")

  return (
    <View style={styles.container}>
      <View style={styles.titleConainer}>
        <Text style={styles.title}>Vaccination drive in {country}</Text>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.populationContainer}>
          <Text style={styles.header}>Total Population</Text>
          <Text style={styles.population}>{population}</Text>
        </View>
        <View style={styles.dosesContainer}>
          <Text style={styles.header}>Total Doses</Text>
          <Text style={styles.doses}>{doses}</Text>
        </View>
      </View>
      <View style={styles.newDosesContainer}>
        <Text style={styles.newDosesText}>Vaccinations in last 24 hours</Text>
        <Text style={styles.newDoses}>{newDoses}</Text>
      </View>
    </View>
  );
};

export default Vaccine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BBE1FA",
    padding: 10,
  },
  titleConainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F4C75",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    // width: 160,
    justifyContent: "space-between",
  },
  populationContainer: {
    backgroundColor: "#0F4C75",
    borderRadius: 10,
    height: 80,
    width: 180,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  dosesContainer: {
    backgroundColor: "#0F4C75",
    borderRadius: 10,
    height: 80,
    width: 195,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  population: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },
  doses: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },
  newDosesContainer: {
    backgroundColor: "#0F4C75",
    borderRadius: 10,
    height: 80,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  newDosesText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  newDoses: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },
});
