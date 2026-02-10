import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Text, View } from "react-native";


const { height, width } = Dimensions.get('window')

export default function BooksView() {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#3498db', height: 100, width, paddingTop: 50, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Ionicons name={'person-circle-outline'} size={28} color={'#fff'} />
                    <Text style={{ fontWeight: '700', fontSize: 16, color: '#fff' }}>Boyet Dedal</Text>
                </View>
                <Ionicons name={'menu'} size={28} color={'#fff'} />
            </View>
        </View>
    )
}