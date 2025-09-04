import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';

const DashboardLayout = () => {

    const ColorScheme = useColorScheme();
    const theme = Colors[ColorScheme] ?? Colors.light;
    return (
        <Tabs
            screenOptions={{headerShown: false, tabBarStyle: {
                backgroundColor: theme.navBackground,paddingTop:10, height:90 }, 
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor,
            }}
        >
            <Tabs.Screen name="books" options={{ title: 'Books' }} />
            <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
            <Tabs.Screen name="create" options={{ title: 'Create' }} />

        </Tabs>
    )
};


export default DashboardLayout