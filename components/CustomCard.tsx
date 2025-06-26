import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CustomCardProps {
  title: string;
  description: string;
  backgroundColor?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  backgroundColor = '#FFFFFF'
}) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default CustomCard; 