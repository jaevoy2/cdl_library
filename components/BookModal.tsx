import { View, Text, Image, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import IconButton from './IconButton';

type BookModalProps = {
  isVisible: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  buttonTitle?: string;
  onButtonPress?: () => void;
};

export default function BookModal({
  isVisible,
  onClose,
  image,
  title,
  description,
  buttonTitle = 'Scan Book',
  onButtonPress,
}: BookModalProps) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      swipeDirection="down"
      onSwipeComplete={onClose}
    >
      <View style={styles.drawer}>
        <Image source={{ uri: image }} style={styles.drawerImage} resizeMode="cover" />
        <Text style={styles.drawerTitle}>{title}</Text>
        <Text style={styles.drawerDescription}>{description}</Text>
        {onButtonPress && (
          <IconButton
            title={buttonTitle}
            iconName="scan-outline"
            onPress={onButtonPress}
            style={{ marginTop: 20 }}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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