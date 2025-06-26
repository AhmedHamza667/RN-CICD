import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const CustomComp = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleClear = () => {
    setName('');
    setGreeting('');
  };

  const handleGreet = () => {
    setGreeting(`Hello, ${name.trim() || 'Stranger'}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Your name"
          placeholderTextColor="#aaa"
        />
        {name.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <Image
              source={require('../assets/close.png')}
              style={styles.clearImage}
            />
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        onPress={handleGreet}
        style={name.length != 0 ? styles.button : styles.disabledBtn}
        disabled={name.length == 0}>
        <Text style={styles.buttonText}>Say Hello</Text>
      </TouchableOpacity>

      {greeting.length > 0 && <Text style={styles.greeting}>{greeting}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    paddingRight: 40,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  clearImage: {
    width: 16,
    height: 16,
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledBtn: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});

export default CustomComp;
