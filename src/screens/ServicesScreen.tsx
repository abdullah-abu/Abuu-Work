import React from 'react';
import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import { services } from '../../data/services';
import { ServiceCard } from '../../components/ServiceCard';
import { Service } from '../../types/Service';

export function ServicesScreen({ navigation }: any) {
  const { width } = useWindowDimensions();
  const columns = width >= 700 ? 3 : 2;
  const screenPadding = 20;
  const gap = 12;
  const cardWidth = (width - screenPadding * 2 - gap * (columns - 1)) / columns;

  const openService = (service: Service) => {
    navigation.navigate('Details', {
      serviceId: service.id,
      title: service.title,
      description: service.description,
      icon: service.icon,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Сервисы Abuu Work</Text>

      <FlatList
        data={services}
        keyExtractor={item => item.id}
        numColumns={columns}
        key={columns}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ServiceCard service={item} width={cardWidth} onPress={openService} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F8FC', padding: 20 },
  title: { fontSize: 24, fontWeight: '800', color: '#092B55', marginBottom: 16, marginTop: 10 },
  list: { paddingBottom: 20 },
  row: { gap: 12, marginBottom: 12 },
});