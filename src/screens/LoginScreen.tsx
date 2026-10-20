import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LoginProps } from '../types/navigation';

export function LoginScreen({ navigation }: LoginProps) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!login.trim() || password.length < 6) {
      Alert.alert('Ошибка', 'Введите логин и пароль не короче 6 символов');
      return;
    }
    // Заменяем экран входа на главный с навигацией
    navigation.replace('Main', { userName: login.trim() });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.card}>
        <Text style={styles.brandTitle}>Abuu Work</Text>
        <Text style={styles.subtitle}>Введите данные для входа</Text>

        <TextInput
          style={styles.input}
          placeholder="Логин"
          placeholderTextColor="#94A3B8"
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Войти</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#F4F8FC' },
  card: { backgroundColor: '#FFFFFF', padding: 24, borderRadius: 22, elevation: 4 },
  brandTitle: { fontSize: 32, fontWeight: '800', color: '#0B66E4', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#60758A', textAlign: 'center', marginBottom: 24, marginTop: 4 },
  input: { borderWidth: 1, borderColor: '#C7D7E8', padding: 14, borderRadius: 12, marginBottom: 14, fontSize: 16 },
  button: { backgroundColor: '#0B66E4', padding: 16, borderRadius: 12, marginTop: 10 },
  buttonText: { color: '#FFFFFF', textAlign: 'center', fontWeight: '700', fontSize: 16 },
});