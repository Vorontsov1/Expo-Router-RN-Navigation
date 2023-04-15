
import { Stack, useRouter} from "expo-router";
import { Entypo } from '@expo/vector-icons';

export default () => {
    const router = useRouter();
    return (
      <Stack
        screenOptions={{
          headerTintColor: "#1E2632",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
          },
          headerStyle: { backgroundColor: "#FFE030" },
          headerRight: () => (
              <Entypo
                  onPress={() => router.push('/modal')}
                  name="info-with-circle"
                  size={34} color="white"
                  style={{ marginRight: 15 }}
              />
                ),
        }}
      >
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="modal" options={{
                presentation: "modal",
                headerStyle: {
                    backgroundColor: "#FF9F1C",
                },
                headerTintColor: "#1E2632",
        }} /> 
        <Stack.Screen name='home' options={{headerShown: false}} />
      </Stack>
    );
};


