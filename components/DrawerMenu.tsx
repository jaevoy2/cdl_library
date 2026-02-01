import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

type DrawerMenuProps = {
  visible: boolean;
  onClose: () => void;
};

type Screen = '/' | '/explore';

export default function DrawerMenu({ visible, onClose }: DrawerMenuProps) {
  const router = useRouter();
  const [animation] = useState(new Animated.Value(visible ? 0 : -width));

  // Animate drawer when visible changes
  useEffect(() => {
    Animated.timing(animation, {
      toValue: visible ? 0 : -width,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [visible]);

  const navigate = (screen: Screen) => {
    onClose();
    router.push(screen);
  };

  return (
    <>
      {visible && <TouchableOpacity style={styles.overlay} onPress={onClose} />}
      <Animated.View style={[styles.container, { left: animation }]}>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity style={styles.item} onPress={() => navigate('/')}>
          <Text style={styles.itemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigate('/explore')}>
          <Text style={styles.itemText}>Explore</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 5,
  },
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 16,
    zIndex: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 0 },
    elevation: 5,
  },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20, paddingHorizontal: 15},
  item: { paddingVertical: 12},
  itemText: { fontSize: 18, paddingHorizontal: 15 },
});