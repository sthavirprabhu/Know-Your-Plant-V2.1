import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const ChatBot = () => {
  return (
    <View>
      <WebView
        source={{ uri: 'https://gemini.google.com/app?hl=en-GB' }}
        style={{ flex: 1 }}
        originWhitelist={['*']}
        javaScriptEnabled={true}  
        domStorageEnabled={true} 
        allowsInlineMediaPlayback={true}
      />
    </View>
  )
}

export default ChatBot

const styles = StyleSheet.create({})