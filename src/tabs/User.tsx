import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import useScreenBackground from "../hooks/useScreenBackground";
import { useSelector } from "react-redux";

const User = () => {
  const items = useSelector((state: any) => state.post);
  const Background = useScreenBackground();

  return (
    <View style={styles.container}>
      <Background />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerTitle}>User Items</Text>
            <Text style={styles.headerCount}>
              (Total Items: {items?.data?.length || 0})
            </Text>
          </View>
        }
        data={items?.data || []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>₹{item.price}</Text>
            <Text style={styles.itemDesc}>{item.description}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>No items found</Text>
          </View>
        }
      />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    // backgroundColor: "#f9f9f9",
  },
  header: {
    alignItems: "center",
    backgroundColor: "#d7f5f7",
    paddingVertical: 15,
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },
  headerCount: {
    fontSize: 16,
    color: "#444",
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0a84ff",
    marginBottom: 6,
  },
  itemDesc: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  emptyBox: {
    marginTop: 40,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#000",
  },
});
