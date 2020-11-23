import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Details from '../pages/Details';

const App = createStackNavigator();

const routes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home">
      <App.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <App.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </App.Navigator>
  </NavigationContainer>
)



export default routes;
