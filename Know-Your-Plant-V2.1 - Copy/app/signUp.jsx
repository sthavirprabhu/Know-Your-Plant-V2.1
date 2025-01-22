import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import BackButton from '../components/BackButton'
import { hp, wp } from '../helpers/common'
import Input from '../components/Input'
import Button from '../components/Button'
import { supabase } from '../lib/supabase'

const SignUp = () => {
    const router = useRouter()
    const emailRef = useRef("")
    const nameRef = useRef("")
    const passwordRef = useRef("")
    const repasswordRef = useRef("")
    const [loading, setLoading] = useState(false)

    const onSubmit = async ()=>{
        if(!emailRef.current || !passwordRef.current){
          Alert.alert('Sign Up Failed', 'Please fill all the Fields!')
          return
        }

        if(passwordRef !== repasswordRef){
          Alert.alert('Passwords Do Not Match', 'Please fill the same password for both Fields')
          return
        }

        let name = nameRef.current.trim()
        let email = emailRef.current.trim()
        let password = passwordRef.current.trim()

        setLoading(true)

        const {data: {session}, error} = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name
            }
          }
        })
        setLoading(false)

        // console.log('session', session)
        // console.log('error', error)
        if(error){
          Alert.alert('Sign Up Failed', error.message)
        }
    }

  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark'/>
      <View style={styles.container}>
        <BackButton router={router}/>

        {/* welcome text */}
        <View>
          <Text style={styles.welcomeText}>Hi There</Text>
          <Text style={styles.welcomeText}>Let's Get Started!</Text>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
              Fill in the form to create your new account
          </Text>
          <Input 
              icon={<Icon name='user' size={26} strokeWidth={1.6} />}
              placeholder='Enter Your Name'
              onChangeText={value=> nameRef.current = value}
          />
          <Input 
              icon={<Icon name='mail' size={26} strokeWidth={1.6} />}
              placeholder='Enter Your Email'
              onChangeText={value=> emailRef.current = value}
          />
          <Input 
              icon={<Icon name='lock' size={26} strokeWidth={1.6} />}
              placeholder='Enter Your Password'
              secureTextEntry
              onChangeText={value=> passwordRef.current = value}
          />
          <Input 
              icon={<Icon name='lock' size={26} strokeWidth={1.6} />}
              placeholder='Renter Your Password'
              secureTextEntry
              onChangeText={value=> repasswordRef.current = value}
          />
          {/* button */}
          <Button title={'Sign Up!'} loading={loading} onPress={onSubmit} />
        </View>

        {/* footer */}
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                Already have an account? 
            </Text>
            <Pressable onPress={()=> router.push('login')}>
              <Text style={[styles.footerText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}>Login</Text>
            </Pressable>
        </View>
      </View>

    </ScreenWrapper>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  }
})