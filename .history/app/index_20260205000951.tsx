import { Image, View } from 'react-native';

const logo = require('@/assets/images/log.png');


export default function Index() {
    return (
        <View style={{ justifyContent: 'center' }}>
            <Image source={logo} style={{ height: 50, width: 50 }} />
        </View>
    )
}