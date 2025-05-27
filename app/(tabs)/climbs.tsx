import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ClimbsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Climbs
        </ThemedText>
        <ThemedText style={styles.description}>
          Track your climbing routes, progress, and achievements on the spray wall.
        </ThemedText>
        
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Recent Climbs</ThemedText>
          <ThemedText style={styles.placeholder}>
            Your recent climbing sessions will appear here.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Route Library</ThemedText>
          <ThemedText style={styles.placeholder}>
            Browse and filter available climbing routes.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Progress Tracking</ThemedText>
          <ThemedText style={styles.placeholder}>
            View your climbing statistics and improvement over time.
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
  description: {
    marginBottom: 30,
    opacity: 0.7,
  },
  section: {
    marginBottom: 25,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  placeholder: {
    marginTop: 10,
    opacity: 0.6,
    fontStyle: 'italic',
  },
}); 