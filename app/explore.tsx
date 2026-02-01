import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import DrawerMenu from '@/components/DrawerMenu';

export default function ExploreScreen() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Navbar title="Explore" onMenuPress={() => setDrawerVisible(true)} />
      <DrawerMenu visible={drawerVisible} onClose={() => setDrawerVisible(false)} />

      <View style={styles.content}>
        <Text style={{ fontSize: 22 }}>Explore Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});