import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tab1Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab 1</Text>
      <Text style={styles.subtitle}>First tab of the top navigation</Text>
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default Tab1Screen; 