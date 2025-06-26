import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

interface CustomCounterProps {
  initialValue?: number;
  step?: number;
}

const CustomCounter: React.FC<CustomCounterProps> = ({
  initialValue = 0,
  step = 1
}) => {
  const [count, setCount] = useState(initialValue);
  const [isEven, setIsEven] = useState(false);

  useEffect(() => {
    // This effect runs whenever count changes
    setIsEven(count % 2 === 0);
    
    // Cleanup function
    return () => {
      console.log('Counter component will unmount');
    };
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>Count: {count}</Text>
      <Text style={styles.status}>
        Number is {isEven ? 'Even' : 'Odd'}
      </Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Decrease"
          onPress={() => setCount(prev => prev - step)}
          color="#FF3B30"
        />
        <CustomButton
          title="Increase"
          onPress={() => setCount(prev => prev + step)}
          color="#34C759"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default CustomCounter; 