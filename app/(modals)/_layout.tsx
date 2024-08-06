import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}>
            {/* Optionally configure static options outside the route.*/}
            <Stack.Screen name="index" options={{}} />
            <Stack.Screen name="items" options={{}} />
            <Stack.Screen name="product" options={{}} />
            <Stack.Screen name="checkout" options={{}} />
        </Stack>
    );
}
