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
            <Stack.Screen name="delivery" options={{}} />
            <Stack.Screen name="address" options={{}} />
            <Stack.Screen name="payment" options={{}} />
            <Stack.Screen name="success" options={{
                presentation: "modal"
            }} />
        </Stack>
    );
}
