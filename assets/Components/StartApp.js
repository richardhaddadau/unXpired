import { useState, useEffect } from "react";
import { Button, Text, TouchableWithoutFeedback, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const StartApp = (props) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => props.openScan(true)}>
        <Text>Scanned</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default StartApp;
