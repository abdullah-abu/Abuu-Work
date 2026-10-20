import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function ProfileScreen({ navigation }: any) {
  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Ionicons name="person-circle-outline" size={90} color="#0B66E4" />
        <Text style={styles.userName}>Студент Abuu Work</Text>

        <View style={styles.groupBadge}>
          <Text style={styles.groupBadgeText}>Группа: ИС-25-11</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Специальность:</Text>
          <Text style={styles.infoValue}>Информационные системы</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Форма обучения:</Text>
          <Text style={styles.infoValue}>Очная</Text>
        </View>

        <Pressable style={styles.logoutBtn} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#D9342B" />
          <Text style={styles.logoutText}>Выйти из аккаунта</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F8FC',
    justifyContent: 'center', 
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 22,
    alignItems: 'center',
    elevation: 3,
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#092B55',
    marginTop: 8,
  },
  groupBadge: {
    backgroundColor: '#EBF3FE',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#C7D7E8',
  },
  groupBadgeText: {
    color: '#0B66E4',
    fontWeight: '700',
    fontSize: 14,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F8',
  },
  infoLabel: {
    color: '#60758A',
    fontSize: 14,
  },
  infoValue: {
    color: '#092B55',
    fontWeight: '600',
    fontSize: 14,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 24,
    padding: 12,
  },
  logoutText: {
    color: '#D9342B',
    fontWeight: '700',
    fontSize: 16,
  },
});