import React from 'react'
import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {

  return (
   <>
    <StatusBar style="auto"/>

    <Stack 
        screenOptions={{ animation: 'none' }}
    />
   </>
  )
}

export default AuthLayout

