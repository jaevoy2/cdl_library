import { View, Image, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';

type BookCardProps = {
  image: string; // URL or local asset
  onPress?: () => void;
};

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.6; // wider card
const CARD_HEIGHT = CARD_WIDTH * 1.5; // maintain portrait aspect ratio

export default function BookCard({ image, onPress }: BookCardProps) {
  const Content = () => (
    <View style={[styles.card, { width: CARD_WIDTH, height: CARD_HEIGHT }]}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Content />
    </TouchableOpacity>
  ) : (
    <Content />
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 8,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#eee', // subtle outline
    // Shadow for iOS
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // Shadow for Android
    elevation: 6,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});