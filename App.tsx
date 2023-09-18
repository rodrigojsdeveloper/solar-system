import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Dashboard } from "./src/screens/Dashboard";
import { Providers } from "./src/contexts";
import { Home } from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Providers>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Dashboard}
            initialParams={{ id: "Earth" }}
          />
          <Stack.Screen name="Dashboard" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  );
}
