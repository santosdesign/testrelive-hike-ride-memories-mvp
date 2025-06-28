import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PricingScreenProps {}

const PricingScreen: React.FC<PricingScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pricing Screen</Text>
      {/* Implement pricing details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default PricingScreen;
