import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { View } from 'react-native';

type QRCodeGeneratorProps = {
  value: string | number;
};

export default function QRCodeGenerator({ value }: QRCodeGeneratorProps) {
  return (
    <View style={{ alignItems: 'center', margin: 20 }}>
      <QRCode value={String(value)} size={200} />
    </View>
  );
}