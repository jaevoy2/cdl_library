import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

const logo = require('../assets/images/logo-name.png');
const school = require('../assets/images/school.png');
const { height } = Dimensions.get('screen');


export default function Index() {
    return (
        <ImageBackground source={school} resizeMode={'contain'} style={{ flex: 1 }}>
            <LinearGradient
                colors={[
                'rgba(0, 200, 83, 0)',
                'rgba(2, 224, 95, 0.15)',
                'rgba(1, 226, 95, 0.4)',
                'rgba(3, 226, 96, 0.8)',
                ]}
                style={{ flex: 1, height: 40, position: 'absolute', width: '100%', bottom: 0, zIndex: 2 }}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center', height, paddingHorizontal: 20, gap: '40' }}>
                <Image source={logo} style={{ height: 80, width: 200 }} />

                <View style={{ flexDirection: 'column', alignItems: 'center', gap: 20, width: '100%' }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', letterSpacing: 2 }}>MLGCL LIBRARY</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, borderColor: '#fff', borderWidth: 1, borderRadius: 50, padding: 10, width: '100%' }}>
                        <Ionicons name={'logo-google'} size={20} color={'#fff'} />
                        <Text style={{ color: '#fff' }}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}