import React, { useRef } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Button } from 'react-native';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import { CounterScreen } from '../screens/CounterScreen';
import CounterExample, { CounterRef } from '../components/CounterExample';
import ExpensiveCounter from '../components/ExpensiveCounter';
import { Text } from 'react-native-gesture-handler';

const TopTab = createMaterialTopTabNavigator();

const CounterExampleWrapper = () => {
  const counterRef = useRef<CounterRef>(null);

  const handleReset = () => {
    counterRef.current?.reset();
  };

  const handleGetCount = () => {
    const count = counterRef.current?.getCount();
    console.log('Current count:', count);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ 
        borderWidth: 2, 
        borderColor: '#007AFF', 
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
      }}>
        <CounterExample ref={counterRef} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        <Button title="Reset from Parent" onPress={handleReset} />
        <Button title="Get Count" onPress={handleGetCount} />
      </View>
    </View>
  );
};

const TopTabNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarIndicatorStyle: { backgroundColor: '#007AFF' },
          tabBarItemStyle: { paddingTop: 0 },
        }}>
        <TopTab.Screen name="Counter Example" component={CounterExampleWrapper} />
        <TopTab.Screen name="Counter" component={CounterScreen} />
        <TopTab.Screen name="Optimized Counter" component={ExpensiveCounter} />
      </TopTab.Navigator>
    </SafeAreaView>
  );
};

export default TopTabNavigator; 