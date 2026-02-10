import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Text, View } from "react-native";


const { height, width } = Dimensions.get('window')

export default function BooksView() {
    return (
        <View>
            <View style={{ backgroundColor: '#3498db', height: 100, width, paddingTop: 60, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name={'person-circle-outline'} size={28} color={'#fff'} />
                    <Text style={{ fontWeight: '700', fontSize: 16, color: '#fff' }}>Boyet Dedal</Text>
                </View>
            </View>
        </View>
    )
}