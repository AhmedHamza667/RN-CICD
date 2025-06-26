import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import DrawerNavigator from './navigation/DrawerNavigator';
import TopTabNavigator from './navigation/TopTabNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: string = 'home';

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Profile') {
                  iconName = focused ? 'person' : 'person-outline';
                } else if (route.name === 'Tabs') {
                  iconName = focused ? 'list' : 'list-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#007AFF',
              tabBarInactiveTintColor: 'gray',
              headerShown: true,
            })}>
            <Tab.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#007AFF',
                },
                headerTintColor: '#fff',
              }}
            />
            <Tab.Screen 
              name="Profile" 
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen 
              name="Tabs" 
              component={TopTabNavigator}
              options={{
                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
