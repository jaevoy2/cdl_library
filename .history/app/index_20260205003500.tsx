import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

const logo = require('../assets/images/logo.png');
const { height } = Dimensions.get('window')


export default function Index() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image source={logo} style={{ height: 90, width: 90 }} />
                <Text>MLGCL LIBRARY</Text>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, borderColor: '#a8a8a8', borderWidth: 1, borderRadius: 50, padding: 10, width: '100%' }}>
                <Ionicons name={'logo-google'} size={25} />
                <Text>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    )
}