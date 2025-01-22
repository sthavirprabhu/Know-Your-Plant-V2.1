import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { theme } from '../../constants/theme'
import { hp, wp } from '../../helpers/common'
import { RFValue } from "react-native-responsive-fontsize";

const Overview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Overview</Text>
        <Text style={styles.punchline}>Lets see how "Plant Name" is doing?</Text>
      </View>
      <View style={styles.listStyle}>
        <Pressable style={styles.touchable}>
        <View style={styles.imageContainer}>
          <Image style={styles.image}
            source={require('../../assets/images/Logo.png')}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Sunlight Requirements
            </Text>
          </View>
        </View>
        </Pressable>
        <Pressable style={styles.touchable}>
        <View style={styles.imageContainer}>
          <Image style={styles.image}
            source={require('../../assets/images/Logo.png')}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Water Requirements
            </Text>
          </View>
        </View>
        </Pressable>
        <Pressable style={styles.touchable}>
        <View style={styles.imageContainer}>
          <Image style={styles.image}
            source={require('../../assets/images/Logo.png')}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Manure Requirements
            </Text>
          </View>
        </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Overview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: wp(4)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: wp(4)
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(3.2),
    fontWeight: theme.fonts.bold,
  },
  touchable: {
    gap: 10,
    marginBottom: 15,
    borderRadius: theme.radius.xxl*1.1,
    borderCurve: 'continuous',
    padding: 10,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: theme.colors.gray,
    shadowColor: '#000000'
  },
  listStyle: {
    paddingTop: 20,
    paddingHorizontal: wp(4)
  },
  imageContainer: {
    margin: RFValue(13),
    backgroundColor: "#dcdcdc",
    borderRadius: RFValue(20),
    height: 75,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  titleContainer: {
    paddingLeft: RFValue(15),
    justifyContent: "center"
  },
  titleText: {
    fontSize: RFValue(15),
    color: theme.colors.text,
  },
  punchline: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text
  },
})