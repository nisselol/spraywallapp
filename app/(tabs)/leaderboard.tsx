import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function LeaderboardScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Leaderboard
        </ThemedText>
        <ThemedText style={styles.description}>
          See how you rank against other climbers and compete in challenges.
        </ThemedText>
        
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Overall Rankings</ThemedText>
          <ThemedText style={styles.placeholder}>
            Top climbers will be displayed here based on completed routes and difficulty.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Weekly Challenge</ThemedText>
          <ThemedText style={styles.placeholder}>
            Current weeks climbing challenge and participants.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Grade Categories</ThemedText>
          <ThemedText style={styles.placeholder}>
            Rankings by climbing grade (V0-V1, V2-V3, V4-V5, etc.)
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Your Rank</ThemedText>
          <ThemedText style={styles.placeholder}>
            Your current position and recent achievements.
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