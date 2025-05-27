import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Profile
        </ThemedText>
        <ThemedText style={styles.description}>
          Manage your account and view your climbing statistics.
        </ThemedText>
        
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Personal Info</ThemedText>
          <ThemedText style={styles.placeholder}>
            Name, email, and climbing preferences.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Climbing Stats</ThemedText>
          <ThemedText style={styles.placeholder}>
            Total routes completed, highest grade, and personal records.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Achievements</ThemedText>
          <ThemedText style={styles.placeholder}>
            Badges and milestones earned through climbing.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Settings</ThemedText>
          <ThemedText style={styles.placeholder}>
            App preferences, notifications, and account settings.
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