import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Добро пожаловать в</Text>
        <Text style={styles.brandText}>Abuu Work</Text>
      </View>

      <Text style={styles.sectionTitle}>Быстрый доступ</Text>

      <View style={styles.quickAccessRow}>
        <Pressable
          style={styles.quickCard}
          onPress={() =>
            navigation.navigate('Details', {
              serviceId: '1',
              title: 'Библиотека',
              description: 'Электронный каталог и заказ книг',
              icon: 'book-outline',
            })
          }
        >
          <Ionicons name="book-outline" size={32} color="#0B66E4" />
          <Text style={styles.quickText}>Библиотека</Text>
        </Pressable>

        <Pressable
          style={styles.quickCard}
          onPress={() =>
            navigation.navigate('Details', {
              serviceId: '2',
              title: 'Расписание',
              description: 'Актуальное расписание занятий',
              icon: 'calendar-outline',
            })
          }
        >
          <Ionicons name="calendar-outline" size={32} color="#0B66E4" />
          <Text style={styles.quickText}>Расписание</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F8FC', padding: 20 },
  header: { marginTop: 20, marginBottom: 24 },
  welcomeText: { fontSize: 16, color: '#60758A' },
  brandText: { fontSize: 32, fontWeight: '800', color: '#0B66E4' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#092B55', marginBottom: 14 },
  quickAccessRow: { flexDirection: 'row', gap: 12 },
  quickCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
  },
  quickText: { marginTop: 8, fontWeight: '600', color: '#092B55' },
});