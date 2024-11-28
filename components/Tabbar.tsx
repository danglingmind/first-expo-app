import { useColorScheme, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { ReactNode } from "react";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();
  //   const { colors } = useTheme();
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  const icon = {
    home: (props: any) => <Feather name="home" size={24} {...props} />,
    explore: (props: any) => <Feather name="compass" size={24} {...props} />,
    profile: (props: any) => <Feather name="user" size={24} {...props} />,
  };

  const styles = StyleSheet.create({
    tabbar: {
      position: "absolute",
      flexDirection: "row",
      bottom: 50,
      justifyContent: "space-between",
      alignContent: "center",
      marginHorizontal: 80,
      borderRadius: 35,
      backgroundColor: colors.tabBackground,
      padding: 15,
    },
    tabbarItem: {
      flex: 1,
      alignItems: "center",
    },
  });

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {icon[route.name]({
              color: isFocused ? colors.tabIconSelected : colors.tabIconDefault,
            })}
            <Text
              style={{
                color: isFocused
                  ? colors.tabIconSelected
                  : colors.tabIconDefault,
              }}
            >
              {label?.toString()}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}
