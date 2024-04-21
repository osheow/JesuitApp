import React from "react";
import { View, StyleSheet } from "react-native";

const PDFScreen = () => {
  // Correctly setting up the source for the local PDF file
  const source = {
    uri: "",
    cache: true,
  };

  // Dynamically resolve the asset path
  const asset = require("../assets/Funeral.pdf");
  source.uri = asset.uri || "";

  return (
    <View style={styles.container}>
      <Pdf
        source={source} // Ensure this is set correctly as an object
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default PDFScreen;
