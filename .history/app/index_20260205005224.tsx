import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

const logo = require('../assets/images/logo-name.png');
const { height } = Dimensions.get('screen')


export default function Index() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height, paddingHorizontal: 20, gap: 30, backgroundColor: '#3498db' }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image source={logo} style={{ height: 80, width: 200 }} />
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, borderColor: '#fff', borderWidth: 1, borderRadius: 50, padding: 10, width: '100%' }}>
                <Ionicons name={'logo-google'} size={20} color={'#fff'} />
                <Text style={{ color: '#fff' }}>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    )
}