import { View, StyleSheet, ScrollView , Image, Text} from 'react-native';
import Navbar from '@/components/Navbar';
import DrawerMenu from '@/components/DrawerMenu';
import SearchInput from '@/components/SearchInput';
import { useState } from 'react';
import BookModal from '@/components/BookModal';
import BookCard from '@/components/BookCard';
import Modal from 'react-native-modal';
import IconButton from '@/components/IconButton';

export default function HomeScreen() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState<null | { image: string; title: string; description: string }>(null);
  const books = [
    {
      image: 'https://i.pinimg.com/736x/7e/56/86/7e5686323be7ec2ab8ff60d83e9376d8.jpg',
      title: 'Book One',
      description: 'Description'
    }
  ];

  return (
    <View style={styles.container}>
      <Navbar title="Home" onMenuPress={() => setDrawerVisible(true)} />
      <DrawerMenu visible={drawerVisible} onClose={() => setDrawerVisible(false)} />

      {/* Search input */}
      <View style={styles.searchContainer}>
        <SearchInput value={search} onChangeText={setSearch} placeholder="Search..." />
      </View>

      {/* You can add the rest of your content below */}
      <View style={styles.content}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 16 }}>
          {books.map((book, index) => (
            <BookCard
              key={index}
              image={book.image}
              onPress={() => setSelectedBook(book)}
            />
          ))}
        </ScrollView>

        <Modal
          isVisible={!!selectedBook}
          onBackdropPress={() => setSelectedBook(null)}
          style={styles.modal}
          swipeDirection="down"
          onSwipeComplete={() => setSelectedBook(null)}
        >
          {selectedBook && (
            <View style={styles.drawer}>
              <Image source={{ uri: selectedBook.image }} style={styles.drawerImage} resizeMode="cover" />
              <Text style={styles.drawerTitle}>{selectedBook.title}</Text>
              <Text style={styles.drawerDescription}>{selectedBook.description}</Text>
              <IconButton title="Scan Book" iconName="scan-outline" onPress={() => console.log('Scan pressed')} style={{ marginTop: 20 }} />
            </View>
          )}
        </Modal>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, paddingHorizontal: 16, alignSelf: 'center' },
  searchContainer: {paddingHorizontal: 22},
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  drawer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  drawerImage: {
    width: 150,
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
  },
  drawerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  drawerDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});