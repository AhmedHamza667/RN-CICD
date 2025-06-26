import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <Drawer.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          drawerStyle: {
            backgroundColor: '#fff',
            width: 240,
          },
          drawerType: 'slide',
          swipeEnabled: true,
          swipeEdgeWidth: 50,
        }}>
        <Drawer.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            title: 'My Profile',
          }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            title: 'Settings',
          }}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default DrawerNavigator; 