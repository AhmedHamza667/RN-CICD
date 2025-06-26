import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then(item => {
        if (item !== null) {
          setStoredValue(JSON.parse(item));
        }
        setIsLoaded(true);
      })
      .catch(error => {
        console.error('Error reading from AsyncStorage:', error);
        setIsLoaded(true);
      });
  }, [key]);

  useEffect(() => {
    if (isLoaded) {
      AsyncStorage.setItem(key, JSON.stringify(storedValue)).catch(error => {
        console.error('Error saving to AsyncStorage:', error);
      });
    }
  }, [key, storedValue, isLoaded]);

  return [storedValue, setStoredValue] as const;
} 