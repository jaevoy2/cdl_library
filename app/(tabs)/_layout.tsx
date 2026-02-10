import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar, Text, View } from "react-native";

<<<<<<< HEAD
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
=======
>>>>>>> e0c8195392db4f95ea2360c5c2c8cb603fb08ff3

export default function TabsLayout() {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />

<<<<<<< HEAD
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Borrow',
          tabBarIcon: ({ color }) => <Ionicons name="book" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Return',
          tabBarIcon: ({ color }) => <Ionicons name="arrow-undo" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
=======
            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: { height: 60 }
            }}>

                <Tabs.Screen
                    name="dashboard"
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#3498db' : 'transparent' }}>
                                {focused ? 'Dashboard' : ''}
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <MaterialCommunityIcons
                                    name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
                                    color={focused ? '#3498db' : '#696969'}
                                    size={focused ? 28 : 32}   
                                />
                            </View>
                        )
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
                                <MaterialCommunityIcons
                                    name={focused ? 'bookmark' : 'bookmark-outline'}
                                    color={focused ? '#3498db' : '#696969'}
                                    size={focused ? 28 : 32}   
                                />
                            </View>
                        )
                    }}
                />
            </Tabs>
        </>
    )
>>>>>>> e0c8195392db4f95ea2360c5c2c8cb603fb08ff3
}