import React, { useEffect, useState, useRef, useMemo } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "./Utility/ListItem.js";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Chart from "./Chart.js";
import Vaccine from "./Vaccine.js"

const CountryList = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [population, setPopulation] = useState([]);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["30%"], []);

  const openModal = (item) => {
    setSelectedCountry(item.country);
    setPopulation(item.population)
    bottomSheetModalRef.current.present();
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <FlatList
          data={sortedData}
          keyExtractor={(item) => item.countryInfo._id}
          renderItem={({ item }) => (
            <ListItem
              // data={item}
              country={item.country}
              deaths={item.deaths}
              active={item.active}
              url={item.countryInfo.flag}
              cases={item.cases}
              recovered={item.recovered}
              onPress={() => openModal(item)}
            />
          )}
        />
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
      >
        <Vaccine country={selectedCountry} population={population}/>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default CountryList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor: "#3282B8",
    flex: 1,
    borderRadius: 25,
  },
});
