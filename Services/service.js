const fetchData = async () => {
  try {
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error)
  }
};

export default fetchData;