import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../src/types/navigation';
import { LoginScreen } from '../src/screens/LoginScreen';
import { MainTabs } from '../src/navigation/MainTabs';
import { DetailsScreen } from '../src/screens/DetailsScreen';
import { RootNavigator } from '../src/navigation/RootNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Детали сервиса', headerTintColor: '#0B66E4' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}