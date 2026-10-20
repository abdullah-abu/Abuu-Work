import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DetailsProps } from '../types/navigation';


const SCHEDULE_DATA = [
  {
    time: '08:30 - 09:50',
    subject: 'Мобильная разработка AppStorm',
    room: 'Каб. О306',
    teacher: 'Блен Ж.Ж.',
  },
  {
    time: '10:00 - 11:20',
    subject: 'Базы данных  SQL',
    room: 'Каб. О306',
    teacher: 'Блен Ж.Ж.',
  },
  {
    time: '11:40 - 13:00',
    subject: 'Веб-программирование(React Native)',
    room: 'Каб. 410',
    teacher: 'Иванов И.И.',
  },
  {
    time: '13:20 - 14:40',
    subject: 'Философия',
    room: 'Каб. 212',
    teacher: 'Акбаева Л.К.',
  },
];

export function DetailsScreen({ route, navigation }: DetailsProps) {
  const { serviceId, title, description, icon } = route.params;

  
  const isSchedule = serviceId === '2' || title === 'Расписание';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Ionicons name={(icon as any) || 'information-circle-outline'} size={56} color="#0B66E4" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.idText}>ID Сервиса: {serviceId}</Text>
        <Text style={styles.description}>{description}</Text>

        
        {isSchedule && (
          <View style={styles.scheduleBlock}>
            <View style={styles.groupBadge}>
              <Text style={styles.groupBadgeText}>Группа: ИС-25-11</Text>
            </View>

            {SCHEDULE_DATA.map((item, index) => (
              <View key={index} style={styles.scheduleCard}>
                <View style={styles.timeBadge}>
                  <Ionicons name="time-outline" size={16} color="#0B66E4" />
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
                <Text style={styles.subjectText}>{item.subject}</Text>
                <View style={styles.scheduleDetails}>
                  <Text style={styles.detailText}>📍 {item.room}</Text>
                  <Text style={styles.detailText}>👨‍🏫 {item.teacher}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Назад</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 22,
    alignItems: 'center',
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#092B55',
    marginTop: 10,
  },
  idText: {
    fontSize: 13,
    color: '#0B66E4',
    fontWeight: '600',
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: '#52677D',
    textAlign: 'center',
    marginBottom: 16,
  },
  scheduleBlock: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  groupBadge: {
    backgroundColor: '#EBF3FE',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#C7D7E8',
  },
  groupBadgeText: {
    color: '#0B66E4',
    fontWeight: '700',
    fontSize: 14,
  },
  scheduleCard: {
    backgroundColor: '#F8FAFC',
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  timeText: {
    color: '#0B66E4',
    fontWeight: '700',
    fontSize: 13,
  },
  subjectText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#092B55',
    marginBottom: 6,
  },
  scheduleDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    fontSize: 12,
    color: '#60758A',
  },
  backButton: {
    backgroundColor: '#0B66E4',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 12,
    width: '100%',
  },
  backText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});