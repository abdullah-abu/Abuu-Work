import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CourseCardProps = {
  title: string;
  teacher: string;
  credits: number;
};

export default function CourseCard({ title, teacher, credits }: CourseCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.teacher}>Преподаватель: {teacher}</Text>
      <Text style={styles.credits}>{credits} кредитов</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#0B66E4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0B66E4',
    marginBottom: 6,
  },
  teacher: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 10,
    fontWeight: '500',
  },
  credits: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0B66E4', 
  },
});