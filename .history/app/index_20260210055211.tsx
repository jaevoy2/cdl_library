import { Ionicons } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { OtpInput } from 'react-native-otp-entry';


const logo = require('../assets/images/logo-name.png');
const school = require('../assets/images/school.png');
const { height, width } = Dimensions.get('screen');


export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [loginSpinner, setLoginSpinner] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [isActive, setIsActive] = useState(false)
    const [timeLeft, setTimeLeft] = useState(120);

    const bottomSheetRef = useRef<BottomSheet>(null);
    const sheetSnapPoints = useMemo(() => ["50%"], []);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>

        if(isActive) {
            if(timeLeft > 0) {
                timer = setInterval(() => {
                    setTimeLeft((prev) => prev - 1  )
                }, 1000);
            }else if(timeLeft == 0) {
                setIsActive(false);
            }
        }

        return () => clearInterval(timer);
    }, [isActive, timeLeft])

    const handleLogin = async () => {
        bottomSheetRef.current?.snapToIndex(0);
        console.log(bottomSheetRef.current);

        // if(!email.trim() || !password.trim()) {
        //     Alert.alert('Invalid', 'Email and password required.');
            
        //     return;
        // }

        // return;
        // setLoginSpinner(true);

        // const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        // let randString = '';

        // for (let i = 0; i < 5; i++) {
        //     randString += chars.charAt(Math.floor(Math.random() * chars.length));
        // }

        // try {
        //     const response = await Login(email.trim(), password.trim(), randString);

        //     if(!response.error) {
        //         bottomSheetRef.current?.snapToIndex(0);
        //         setIsActive(true);
        //     }

        // }catch(error: any) {
        //     Alert.alert('Invali', error.message)
        // }finally {
        //     setLoginSpinner(false)
        // }
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 20 }}>
                <Image source={school} resizeMode='cover' style={{ position: 'absolute', width, height, zIndex: -1, opacity: 0.7 }} />
                <LinearGradient
                    colors={['#3498db', 'rgba(52, 152, 219, 0.88)',  'rgba(52, 152, 219, 0.75)', 'rgba(241, 196, 15, 0.57)',]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ height, position: 'absolute', width, top: 0, zIndex: 2 }}
                />
                <View style={{paddingTop: 170, alignItems: 'center', height, gap: '40', zIndex: 10 }}>
                    <Image source={logo} style={{ height: 80, width: 200 }} />

                    <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '900', letterSpacing: 2 }}>MLGCL LIBRARY</Text>
                        <View style={{ width: '100%', marginTop: 10 }}>
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
                        
                        <TouchableOpacity disabled={loginSpinner} onPress={() => handleLogin()} style={[{backgroundColor: loginSpinner == true ? '#f3d96fff' : '#f1c40f'}, styles.button]} >
                            {loginSpinner == true ? (
                            <ActivityIndicator size={'small'} color={'#3498db'} style={{ alignSelf: 'center' }} />
                            ) : (
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ height, zIndex: 15 }}>
                <BottomSheet ref={bottomSheetRef} snapPoints={sheetSnapPoints} index={0} bottomInset={1} enableHandlePanningGesture={false} enableContentPanningGesture={false}  handleIndicatorStyle={{ display: 'none' }}>
                    <View style={{ height: '100%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Enter 6 Digits Code</Text>
                        <Text style={{ fontSize: 13, marginTop: 25, color: '#545454' }}>Please enter verification code sent to your registered mlgcl email.</Text>
                        <View style={{ marginTop: 20 }}>
                            <OtpInput numberOfDigits={6} focusColor={'#3498db'} autoFocus={false} onTextChange={setOtpCode} />
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                            <Text style={{ fontSize: 12, color: '#545454' }}>Didn't receive a code? </Text>
                            <TouchableOpacity  disabled={isActive} >
                                <Text style={{ fontSize: 12, textDecorationLine: 'underline', color: isActive == true ? '#78bdebff' : '#3498db' }}>Resend code</Text>
                            </TouchableOpacity>
                            {isActive && (
                            <>
                                <Text>{` (${timeLeft})`}</Text>
                            </>
                            )}
                        </View>
                    </View>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
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
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 13,
        borderRadius: 5,
        alignItems: 'center',
    },
    inputFocused: {
        borderColor: '#f1c40f', 
        borderWidth: 2,
    },
});