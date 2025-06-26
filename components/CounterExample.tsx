import React, { useRef, useImperativeHandle, useReducer, forwardRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// state type
type CounterState = {
  count: number;
};

// action types
type CounterAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

// functions to use in useReducer
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// exposed to parent
export type CounterRef = {
  reset: () => void;
  getCount: () => number;
};

const CounterExample = forwardRef<CounterRef>((props, ref) => {

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  
  const renderCount = useRef(0);
  renderCount.current += 1;

  useImperativeHandle(ref, () => ({
    reset: () => dispatch({ type: 'RESET' }),
    getCount: () => state.count
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Example</Text>
      <Text style={styles.counter}>Count: {state.count}</Text>
      <Text style={styles.renderCount}>renders count: {renderCount.current} times</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Increment" 
          onPress={() => dispatch({ type: 'INCREMENT' })} 
        />
        <Button 
          title="Decrement" 
          onPress={() => dispatch({ type: 'DECREMENT' })} 
        />
        <Button 
          title="Reset" 
          onPress={() => dispatch({ type: 'RESET' })} 
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  counter: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  renderCount: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CounterExample; 