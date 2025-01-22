import { Share, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import { theme } from '../../constants/theme'
import Chat from './Comment'
import ThreeDotsHorizontal from './ThreeDotsHorizontal'
import ThreeDotsCircle from './ThreeDotsCircle'
import ArrowLeft from './ArrowLeft'
import Edit from './Edit'
import Camera from './Camera'
import Call from './Call'
import Location from './Location'
import Search from './Search'
import Plus from './Plus'
import Heart from './Heart'
import User from './User'
import Lock from './Lock'
import Mail from './Mail'
import share from './Share'
import Send from './Send'
import Delete from './Delete'
import Logout from './logout'
import Image from './Image'
import Video from './Video'

const icons = {
    home: Home,
    mail: Mail, 
    lock: Lock,
    user: User,
    heart: Heart,
    plus: Plus,
    search: Search,
    location: Location, 
    call: Call,
    camera: Camera,
    edit: Edit,
    arrowLeft: ArrowLeft,
    threeDotsCircle: ThreeDotsCircle, 
    threeDotsHorizontal: ThreeDotsHorizontal,
    comment: Chat,
    share: share,
    send: Send,
    delete: Delete,
    logout: Logout,
    image: Image,
    video: Video,
}

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name]
  return (
    <IconComponent
        height={props.size || 24}
        width={props.size || 24}
        strokeWidth={props.strokeWidth || 1.9}
        color={theme.colors.textLight}
        {...props}
    />
  )
}

export default Icon