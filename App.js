import {NavigationContainer}  from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export default function App() {
  const RootStack = createStackNavigator();

  return (
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="testScreen"
                              getComponent={() => console.log('nothing to do here')}
                              options={{
                                title:       'Test',
                                headerShown: false,
                              }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
  );
}
