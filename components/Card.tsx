import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type CardProps = {
  title: string;
  description?: string;
  onPress?: () => void;
};

export default function Card({ title, description, onPress }: CardProps) {
  const Content = () => (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );

  // If onPress is provided, wrap in TouchableOpacity
  return onPress ? (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Content />
    </TouchableOpacity>
  ) : (
    <Content />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    color: '#111',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});