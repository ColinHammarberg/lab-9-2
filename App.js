import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView,
  Button,
  TextInput,
  Image,
  FlatList,
} from "react-native";

export default function App() {
  let data = [
    {
      title: "BMW",
      location: "Göteborg",
      price: 72000,
      img: require("./pictures/bmw.jpeg"),
      publishDate: "19/10/2020",
      carFuel: "Diesel",
      modelYear: "2022",
      color: "Red",
      accidents: "None",
    },
    {
      title: "Porsche",
      location: "Stockholm",
      price: 120000,
      img: require("./pictures/porsche-preview.webp"),
      publishDate: "21/10/2020",
      carFuel: "Gasoline",
      modelYear: "1992",
      color: "Yellow",
      accidents: "Year: 1998, Frontcrash (Medium crash)",
    },
    {
      title: "BMW",
      location: "Uppsala",
      price: 102000,
      img: require("./pictures/bmw.jpeg"),
      publishDate: "20/10/2020",
      carFuel: "Diesel",
      modelYear: "1999",
      color: "Black",
      accidents: "None",
    },
    {
      title: "Porsche",
      location: "Uppsala",
      price: 86000,
      img: require("./pictures/porsche-preview.webp"),
      publishDate: "23/10/2020",
      carFuel: "Diesel",
      modelYear: "1997",
      color: "Grey",
      accidents: "None",
    },
  ];

  const [clicked, setClicked] = useState(false);

  function SortYear(x) {
    return clicked ? x.sort((a, b) => a.modelYear - b.modelYear) : x;
  }

  const Ads = (props) => {
    return (
      <View style={styles.styleSub}>
        <View style={styles.styleSub}>
          <View
            style={{
              marginBottom: "10px",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <Image
              source={{ uri: `${props.img}` }}
              style={{ width: 200, height: 150 }}
            />
            <Text style={styles.information}>Car Information</Text>
            <Text>{props.title}</Text>
            <Text>{props.modelYear}</Text>
            <Text>{props.color}</Text>
            <Text>{props.location}</Text>
            <Text>{props.price}</Text>
            <Text style={styles.information}>Other Information </Text>
            <Text>{props.publishDate}</Text>
            <Text>{props.carFuel}</Text>
            <Text style={styles.information}>Accident Reports</Text>
            <Text>{props.accidents}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.view}>
          <FlatList
            data={SortYear(data)}
            renderItem={({ item }) => (
              <Ads
                title={item.title}
                location={item.location}
                price={item.price}
                img={item.img}
                color={item.color}
                accidents={item.accidents}
                carFuel={item.carFuel}
                modelYear={item.modelYear}
                publishDate={item.publishDate}
                style={styles.component}
              />
            )}
          />
        </View>
      </ScrollView>
      <View>
        <Button title="Sort By Year" onPress={() => setClicked(true)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flex: 1,
  },
  inputs: {
    margin: "auto",
  },
  input: {
    height: 40,
    margin: 12,
    width: "600px",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  component: {
    margin: "auto",
  },
  view: {
    margin: "auto",
    marginTop: "20px",
  },
  information: {
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "10px",
  },
});
