import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const logo = require('../assets/images/logo-name.png');
const school = require('../assets/images/school.png');
const { height, width } = Dimensions.get('screen');


export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Image source={school} resizeMode='cover' style={{ position: 'absolute', width, height, zIndex: -1, opacity: 0.7 }} />
            <LinearGradient
                colors={['#3498db', 'rgba(52, 152, 219, 0.88)',  'rgba(52, 152, 219, 0.75)', 'rgba(241, 196, 15, 0.57)',]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ height, position: 'absolute', width, top: 0, zIndex: 2 }}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center', height, gap: '40', zIndex: 10 }}>
                <Image source={logo} style={{ height: 80, width: 200 }} />

                <View style={{ flexDirection: 'column', alignItems: 'center', gap: 20, width: '100%' }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '900', letterSpacing: 2 }}>MLGCL LIBRARY</Text>
                    {/* <TouchableOpacity disabled={false} onPress={() => router.push('/(tabs)/dashboard')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, borderColor: '#FBE704', borderWidth: 1, borderRadius: 50, padding: 10, width: '100%' }}>
                        <Ionicons name={'logo-google'} size={20} color={'#fff'} />
                        <Text style={{ color: '#fff' }}>Sign in with Google</Text>
                    </TouchableOpacity> */}
                    <View>
                    <Text style={{ fontSize: 13, color: '#fff', fontWeight: 'bold' }}>Email</Text>
                        <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                        style={[styles.input, emailFocused && styles.inputFocused, { color: '#000' }]}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 13, color: '#fff', fontWeight: 'bold' }}>Password</Text>
                        <View style={[styles.passwordInput, passwordFocused && styles.inputFocused]}>
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            secureTextEntry={!isPasswordVisible}
                            onFocus={() => setPasswordFocused(true)}
                            onBlur={() => setPasswordFocused(false)}
                            style={{ width: '90%', color: '#000' }}
                        />
                        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={{ paddingRight: 10 }}>
                            {isPasswordVisible == true ? (
                            <Ionicons name="lock-open" color={'#3498db'} size={20} />
                            ) : (
                            <Ionicons name="lock-closed" color={'#6C6C6C'} size={20} />
                            )}
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: height,
        width: width,
        paddingTop: 100,
        gap: 50
    },
    logo: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#fff',
    },

    inputContainer: {
        justifyContent: 'center',
    },

    input: {
        backgroundColor: '#f1f1f1',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
        borderWidth: 2,
        borderColor: '#f1f1f1'
    },
    passwordInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        paddingHorizontal: 5,
        borderRadius: 5,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#f1f1f1'
    },
    button: {
        paddingHorizontal: 5,
        paddingVertical: 13,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    inputFocused: {
        borderColor: '#f1c40f', // your accent color
        borderWidth: 2,
    },
    bgImage: {
        position: 'absolute',
        width: width,
        height: height,
        zIndex: -1,
        opacity: 0.7,
    }
    });