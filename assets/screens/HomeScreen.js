import { Text, View } from "react-native";
import { useState } from "react";
import StartApp from "../Components/StartApp";
import StartScan from "../Components/StartScan";

const HomeScreen = () => {
  // States
  const [scanOpen, setScanOpen] = useState(false);

  return (
    <View>
      {scanOpen ? <StartScan /> : <StartApp openScan={setScanOpen} />}
    </View>
  );
};

export default HomeScreen;
