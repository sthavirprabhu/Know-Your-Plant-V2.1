import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from './TabBar'

const BottomTabNavigator = () => {
  return (
    <Tabs
        tabBar={props => <TabBar {...props}/>}
    >
        <Tabs.Screen
            name='Overview'
            options={{
                title: 'Overview'
            }}
        />
        <Tabs.Screen
            name='ChatBot'
            options={{
                title: 'ChatBot'
            }}
        />
        <Tabs.Screen
            name='Home'
            options={{
                title: 'Home'
            }}
        />
    </Tabs>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})