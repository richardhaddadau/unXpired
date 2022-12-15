import CreateNativeStackNavigator from "@react-navigation/native-stack/src/navigators/createNativeStackNavigator";
import TabNavigator from "./TabNavigator";

const Stack = CreateNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Tabs"}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
