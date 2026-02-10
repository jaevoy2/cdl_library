import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

const logo = require('../assets/images/logo.png');
const { height } = Dimensions.get('window')


export default function Index() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height }}>
            <Image source={logo} style={{ height: 120, width: 120 }} />
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 10, borderColor: '#8a8a8a', borderWidth: 1, borderRadius: 50, padding: 10 }}>
                <Ionicons name={'logo-google'} size={25} />
                <Text>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    )
}