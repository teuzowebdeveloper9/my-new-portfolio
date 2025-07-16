import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "../screens/welcome";
import Education from "../screens/education";
import Projects from "../screens/projects";

const Tab = createBottomTabNavigator()

function MyTabs(){
  <Tab.Navigator>
    <Tab.Screen name="welcome" component={Welcome}  />
    <Tab.Screen name="education" component={Education} />
    <Tab.Screen name="project" component={Projects} />
  </Tab.Navigator>
}