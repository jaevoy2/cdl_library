import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Text, TextInput, View } from "react-native";


const { height, width } = Dimensions.get('window')

export default function BooksView() {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#3498db', height: 100, width, paddingTop: 40, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Ionicons name={'person-circle-outline'} size={28} color={'#fff'} />
                    <Text style={{ fontWeight: '700', fontSize: 16, color: '#fff' }}>Boyet Dedal</Text>
                </View>
                <Ionicons name={'menu'} size={28} color={'#fff'} />
            </View>
            <View style={{ paddingTop: 10, paddingHorizontal: 20 }}>
                <View style={{ padding: 10, borderWidth: 1, borderColor: '#000', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextInput placeholder="search" />
                    <Ionicons name={'search'} />
                </View>
            </View>
        </View>
    )
}