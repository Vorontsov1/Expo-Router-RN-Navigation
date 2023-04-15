import { Tabs } from 'expo-router';
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default () => {
    return (
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FDA707",
        }}
      >
        <Tabs.Screen
          name="feed"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={30} color={color} />
            ),
            title: "Feed",
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search-plus" size={30} color={color} />
            ),
            titlte: "Search",
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="message" size={30} color={color} />
            ),
            title: "Messages",
            headerShown: false,
          }}
        />
      </Tabs>
    );
};