  import React, { useState } from 'react';
  import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
  import { useLocalStorage, useDebounce } from '../hooks';

  export const CounterScreen = () => {
    const [count, setCount] = useLocalStorage('counter', 0);
    const debouncedCount = useDebounce(count, 1000);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Counter Demo</Text>
        
        <Text style={styles.count}>Count: {count}</Text>
        <Text style={styles.debouncedCount}>
          Debounced Count: {debouncedCount}
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => setCount(prev => prev + 1)}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#FF3B30', marginTop: 10 }]}
            onPress={() => setCount(0)}
          >
          <Text style={styles.buttonText}>Reset Counter</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    count: {
      fontSize: 18,
      marginBottom: 10,
    },
    debouncedCount: {
      fontSize: 18,
      marginBottom: 20,
      color: '#666',
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 15,
      borderRadius: 8,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  }); 