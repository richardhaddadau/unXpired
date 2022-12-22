import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListScreen from "../screens/ListScreen";

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={"Home"} component={HomeScreen} />
      <Tabs.Screen name={"List"} component={ListScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
