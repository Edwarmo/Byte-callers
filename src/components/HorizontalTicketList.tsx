import React, { useCallback } from 'react';
import { FlatList, View, StyleSheet, ListRenderItem } from 'react-native';
import TicketCard from './TicketCard';
import { Ticket } from '../types/Ticket';

interface HorizontalTicketListProps {
  tickets: Ticket[];
  onTicketPress: (ticket: Ticket) => void;
  onStatusChange: (ticketId: string, newStatus: string) => void;
}

const keyExtractor = (item: Ticket): string => item.id;

const HorizontalTicketList: React.FC<HorizontalTicketListProps> = ({
  tickets,
  onTicketPress,
  onStatusChange,
}) => {
  const renderItem: ListRenderItem<Ticket> = useCallback(({ item }) => (
    <View style={styles.cardContainer}>
      <TicketCard
        ticket={item}
        onPress={onTicketPress}
        onStatusChange={onStatusChange}
      />
    </View>
  ), [onTicketPress, onStatusChange]);

  return (
    <FlatList
      data={tickets}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

export default React.memo(HorizontalTicketList);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  cardContainer: {
    width: 300,
    marginRight: 12,
  },
});