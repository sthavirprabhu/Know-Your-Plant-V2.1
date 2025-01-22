// Add this at the very top of your entry file (e.g., App.js or index.js)


import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '../components/ScreenWrapper'
import { createClient } from '@supabase/supabase-js'
import Loading from '../components/Loading'

const index = () => { 
    const router = useRouter()
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Loading />
    </View>
  )
}

export default index