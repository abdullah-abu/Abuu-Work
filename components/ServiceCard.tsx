import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Service } from '../types/Service';

type CardProps = {
  service: Service;
  width: number;
  onPress?: (service: Service) => void;
};

export function ServiceCard({ service, width, onPress }: CardProps) {
  return (
    <Pressable
      style={[styles.card, { width, backgroundColor: service.color }]}
      onPress={() => onPress?.(service)}
    >
      <Ionicons name={service.icon as any} size={28} color="#092B55" />
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{service.title}</Text>
        <Text style={styles.description}>{service.description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 165,
    padding: 16,
    borderRadius: 20,
    justifyContent: 'space-between',
    shadowColor: '#092B55',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  textContainer: {
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#092B55',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    color: '#52677D',
  },
});