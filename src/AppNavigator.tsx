import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
