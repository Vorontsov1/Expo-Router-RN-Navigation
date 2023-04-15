import { Stack } from "expo-router";

export default () => {
    return <Stack
        screenOptions={{
            headerTintColor: '#1E2632',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 30,
            },
            headerStyle:
                { backgroundColor: '#FFE030' }
        }} 
    >
        <Stack.Screen name="index" options={{ title: 'Home' }}/>
        </Stack>
};
