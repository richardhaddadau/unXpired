import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={"Home"} component={HomeScreen} />
      <Tabs.Screen name={"List"} component={HomeScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
