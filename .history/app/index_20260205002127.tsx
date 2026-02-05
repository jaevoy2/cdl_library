import { Dimensions, Image, View } from 'react-native';

const logo = require('../assets/images/logo.png');
const { height } = Dimensions.get('window')


export default function Index() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height }}>
            <Image source={logo} style={{ height: 80, width: 80 }} />
        </View>
    )
}