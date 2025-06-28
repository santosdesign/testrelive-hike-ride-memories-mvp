import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RecordingScreen from '../screens/RecordingScreen';
import PricingScreen from '../screens/PricingScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Recording" component={RecordingScreen} />
      <Stack.Screen name="Pricing" component={PricingScreen} />
    </Stack.Navigator>
  );
};
