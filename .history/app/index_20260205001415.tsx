import { Image, View } from 'react-native';

const logo = require('../assets/images/logo.png');


export default function Index() {
    return (
        <View style={{ justifyContent: 'center' }}>
            <Image source={logo} style={{ height: 80, width: 80 }} />
        </View>
    )
}