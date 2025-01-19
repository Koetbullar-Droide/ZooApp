import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from './(tabs)/index'; // Assuming MapScreen is in the tabs folder
import BookingScreen from './sites/booking'; // Assuming BookingScreen is in the sites folder

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        {/* Other Tab Screens */}
    </Tab.Navigator>
);

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Booking" component={BookingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
