import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, Text, View } from "react-native";

const StartScan = () => {
  // States
  const [hasPermissions, setHasPermissions] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermissions(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar cod with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermissions === null) {
    return <Text>Requesting camera permissions</Text>;
  }

  if (hasPermissions === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export default StartScan;
