import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, Text, TextInput, TouchableOpacity, View } from "react-native";


const { height, width } = Dimensions.get('window')

export default function BooksView() {
    const [onSearch, setOnSearch] = useState(false);


    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#3498db', height: 100, width, paddingTop: 40, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Ionicons name={'person-circle-outline'} size={28} color={'#fff'} />
                    <Text style={{ fontWeight: '700', fontSize: 16, color: '#fff' }}>Boyet Dedal</Text>
                </View>
                <Ionicons name={'menu'} size={28} color={'#fff'} />
            </View>
            <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
                <View style={{ paddingLeft: 8, borderWidth: 1, borderColor: '#afafaf', backgroundColor: '#eeeded', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 50 }}>
                    <TextInput onChangeText={() => setOnSearch(true)} style={{ width: '85%' }} placeholder="Search" />
                        <View style={{ borderLeftWidth: 1, borderLeftColor: '#afafaf', justifyContent: 'center', paddingHorizontal: 8, backgroundColor: '#9e9d9d', borderTopEndRadius: 50, borderBottomEndRadius: 50 }}>
                            {onSearch  == true ? (
                                <Ionicons name={'close'} size={20} color={'#fff'} />
                            ) : (
                                <TouchableOpacity disabled={onSearch == false}>
                                    <Ionicons name={'search'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                            )}
                        </View>
                </View>
            </View>
        </View>
    )
}