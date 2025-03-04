import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Searchbar, Card, Title, Button } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <Searchbar
        placeholder="Tìm kiếm món ăn "
        style={styles.searchBar}
      />

      {/* Top Categories */}
      <Text style={styles.sectionTitle}>Top Categories</Text>
      <View style={styles.categoryContainer}>
        <Button mode="contained" style={styles.categoryButton}>
          Đồ nướng
        </Button>
        <Button mode="contained" style={styles.categoryButton}>
          Đồ lẩu
        </Button>
        <Button mode="contained" style={styles.categoryButton}>
          Buffet
        </Button>
      </View>

      {/* Popular Items */}
      <Text style={styles.sectionTitle}>Popular Items</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Phở</Title>
          <Text>Nguyễn Phong Sắc</Text>
          <Text>40k</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Bún chả</Title>
          <Text>Bát Đàn</Text>
          <Text>35k</Text>
        </Card.Content>
      </Card>

      {/* View All Button */}
      <Button mode="outlined" style={styles.viewAllButton}>
        View all
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  card: {
    marginBottom: 16,
  },
  viewAllButton: {
    marginTop: 8,
  },
});

export default HomeScreen;