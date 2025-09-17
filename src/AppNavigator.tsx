import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import ItemsByCategory from './screens/ItemsByCategory';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemsByCategory"
          component={ItemsByCategory}
          options={{
            headerShown: true,
            headerTitle: 'Items By Categories',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#dde4ffff',
              elevation: 10,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
