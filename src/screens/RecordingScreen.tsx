import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RecordingScreenProps {}

const RecordingScreen: React.FC<RecordingScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recording Screen</Text>
      {/* Implement recording logic here */}
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

export default RecordingScreen;
