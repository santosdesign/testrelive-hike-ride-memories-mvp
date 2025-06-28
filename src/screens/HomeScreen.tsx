import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

interface HomeScreenProps {}

type NavigationProp = NativeStackNavigationProp<any, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Relive</Text>
      <Button title="Start Recording" onPress={() => navigation.navigate('Recording')} />
      <Button title="View Pricing" onPress={() => navigation.navigate('Pricing')} />
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

export default HomeScreen;
