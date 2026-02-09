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
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loginSpinner, setLoginSpinner] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const sheetSnapPoints = useMemo(() => ['50%'], []);

  // OTP countdown timer
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const handleLogin = async () => {
    // Open BottomSheet on login
    bottomSheetRef.current?.snapToIndex(0);
    setIsActive(true);
    setTimeLeft(120);

    // Your login logic can go here
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Backgrounds */}
      <Image
        source={school}
        resizeMode="cover"
        style={{ position: 'absolute', width, height, opacity: 0.7 }}
      />
      <LinearGradient
        colors={['#3498db', 'rgba(52,152,219,0.88)', 'rgba(52,152,219,0.75)', 'rgba(241,196,15,0.57)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ position: 'absolute', width, height }}
      />

      {/* Main content */}
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 170, alignItems: 'center' }}>
        <Image source={logo} style={{ width: 200, height: 80 }} />
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '900', letterSpacing: 2, marginTop: 10 }}>MLGCL LIBRARY</Text>

        {/* Email Input */}
        <View style={{ width: '100%', marginTop: 20 }}>
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

        {/* Password Input */}
        <View style={{ width: '100%', marginTop: 10 }}>
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
              {isPasswordVisible ? (
                <Ionicons name="lock-open" color={'#3498db'} size={20} />
              ) : (
                <Ionicons name="lock-closed" color={'#6C6C6C'} size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          disabled={loginSpinner}
          onPress={handleLogin}
          style={[styles.button, { backgroundColor: loginSpinner ? '#f3d96fff' : '#f1c40f' }]}
        >
          {loginSpinner ? (
            <ActivityIndicator size="small" color="#3498db" />
          ) : (
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* BottomSheet */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={sheetSnapPoints}
        index={-1} // hidden initially
        enableHandlePanningGesture={false}
        enableContentPanningGesture={false}
        handleIndicatorStyle={{ display: 'none' }}
      >
        <View style={{ flex: 1, padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Enter 6 Digits Code</Text>
          <Text style={{ fontSize: 13, marginTop: 25, color: '#545454' }}>
            Please enter verification code sent to your registered mlgcl email.
          </Text>
          <View style={{ marginTop: 20 }}>
            <OtpInput numberOfDigits={6} focusColor="#3498db" onTextChange={setOtpCode} />
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 12, color: '#545454' }}>Didn't receive a code? </Text>
            <TouchableOpacity disabled={isActive}>
              <Text style={{
                fontSize: 12,
                textDecorationLine: 'underline',
                color: isActive ? '#78bdebff' : '#3498db'
              }}>Resend code</Text>
            </TouchableOpacity>
            {isActive && <Text>{` (${timeLeft})`}</Text>}
          </View>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#f1f1f1',
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
    borderColor: '#f1f1f1',
  },
  button: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 13,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  inputFocused: {
    borderColor: '#f1c40f',
    borderWidth: 2,
  },
});