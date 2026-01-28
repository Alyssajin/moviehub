import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerShown: false,
                title: 'Home',
                tabBarIcon: ({ focused }) => (
                    <>
                        <ImageBackground
                            source={images.highlight}
                            className='flex flex-row w-full flex-1 min-w-[112px] 
                            min-h-14 mt-4 justify-center items-center 
                            rounded-full overflow-hidden'>
                            <Image source={icons.home} style={{ width: 20, height: 20, tintColor: '#151312' }} />
                            <Text className='text-secondary text-base font-semibold ml-2'> HOME </Text>
                        </ImageBackground>
                    </>
                )
            }} />
            <Tabs.Screen name="search" options={{ headerShown: false, title: 'Search', tabBarIcon: ({ focused }) => <Text className={focused ? 'text-primary' : 'text-light-100'}>Search</Text> }} />
            <Tabs.Screen name="saved" options={{ headerShown: false, title: 'Saved', tabBarIcon: ({ focused }) => <Text className={focused ? 'text-primary' : 'text-light-100'}>Saved</Text> }} />
            <Tabs.Screen name="profile" options={{ headerShown: false, title: 'Profile', tabBarIcon: ({ focused }) => <Text className={focused ? 'text-primary' : 'text-light-100'}>Profile</Text> }} />
        </Tabs>
    )
}

export default _layout