import { Image, View } from 'react-native';

const logoImg = require('../assets/images/logo.png');


export default function Index() {
    return (
        <View style={{ justifyContent: 'center' }}>
            <Image source={logoImg} style={{ height: 50, width: 50 }} />
        </View>
    )
}