import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function factorial(num: number) {
  console.log('Running slow calculation...');
  if (num == 1 || num == 0) {
    return num;
  }
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}

const ChildButton = React.memo(({onPress}: {onPress: () => void}) => {
  console.log('ChildButton rendered');
  return <Button title="Increment" onPress={onPress} />;
});

const ExpensiveCounter = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // recalculates when count changes only
  const expensiveValue = useMemo(() => factorial(count), [count]);

  const increment = useCallback(() => setCount(c => c + 1), []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expensive Counter</Text>
      <Text>Count: {count}</Text>
      <Text>factorial (expensiveValue): {expensiveValue}</Text>
      <ChildButton onPress={increment} />
      <Button title="Toggle Other State" onPress={() => setOther(o => !o)} />
      <Text>Other state: {other ? 'ON' : 'OFF'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
});

export default ExpensiveCounter;
