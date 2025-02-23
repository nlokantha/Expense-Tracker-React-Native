import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { scale, verticalScale } from '@/utils/styling'
import ModalWrapper from '@/components/ModalWrapper'
import Header from '@/components/Header'
import BackButton from '@/components/BackButton'

const ProfileModal = () => {
  return (
    <ModalWrapper>
      <View style={styles.container}>
        <Header title='Update Profile' leftIcon={<BackButton/>} style={{marginBottom:spacingY._10}}/>
      </View>
    </ModalWrapper>
  )
}

export default ProfileModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        paddingHorizontal:spacingY._20
    },
    footer:{
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:spacingX._20,
        flexDirection:"row",
        gap:scale(12),
        paddingTop:spacingY._15,
        borderTopColor:colors.neutral700,
        marginBottom:spacingY._5,
        borderTopWidth:1
    },
    form:{
      gap:spacingY._30,
      marginTop:spacingY._15
    },
    avatarContainer:{
      position:"relative",
      alignSelf:"center"
    },
    avatar:{
      backgroundColor:colors.neutral300,
      height:verticalScale(135),
      width:verticalScale(135),
      alignSelf:"center",
      borderRadius:200,
      borderWidth:1,
      borderColor:colors.neutral500
    },
    editIcon:{
      position:"absolute",
      bottom:spacingY._5,
      right:spacingY._7,
      borderRadius:100,
      backgroundColor:colors.neutral100,
      elevation:4,
      padding:spacingY._7
    },
    inputContainer:{
      gap:spacingY._10
    }
})