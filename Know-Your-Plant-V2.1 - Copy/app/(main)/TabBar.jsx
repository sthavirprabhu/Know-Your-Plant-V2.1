import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

const TabBar = ({ state, descriptors, navigation }) => {
  
  const icons = {
      Overview: (props)=> <AntDesign name="home" size={26} color="gray" {...props} />,
      ChatBot: (props)=> <Entypo name="chat" size={26} color="black" {...props} />,
      Home: (props)=> <Ionicons name="people" size={26} color="black" {...props} />,
  }

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
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
                icons[route.name]({
                    color: isFocused ? 'black' : 'gray'
                })
            }
            <Text style={{ color: isFocused ? 'black' : 'gray', fontSize: 11 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    tabbar: {
      position: 'absolute',
      bottom: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      marginHorizaontal: 20,
      paddingVertical: 15,
      borderRadius: 25,
      borderCurve: 'continuous',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 10},
      shadowRadius: 10,
      shadowOpacity: 0.1
    },
    tabbarItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4
    }
})

export default TabBar