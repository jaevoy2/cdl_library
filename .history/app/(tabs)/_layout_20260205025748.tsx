import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar, Text, View } from "react-native";


export default function TabsLayout() {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />

            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: { height: 60 }
            }}>

                <Tabs.Screen
                    name="books"
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#3498db' : 'transparent' }}>
                                {focused ? 'Books' : ''}
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Ionicons
                                    name={focused ? 'book' : 'book-outline'}
                                    color={focused ? '#3498db' : '#696969'}
                                    size={28}
                                />
                            </View>
                        ),
                        tabBarPosition: 'bottom'
                    }}
                />

                <Tabs.Screen
                    name="reservations"
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <View>
                                <Text style={{ color: focused ? '#3498db' : 'transparent' }}>
                                    {focused ? 'Reservations' : ''}
                                </Text>
                            </View>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Ionicons
                                    name={focused ? 'bookmark' : 'bookmark-outline'}
                                    color={focused ? '#3498db' : '#696969'}
                                    size={28}   
                                />
                            </View>
                        )
                    }}
                />
            </Tabs>
        </>
    )
}