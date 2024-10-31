import { View, Text , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigaton = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 flex justify-around bg-white`}>
        <View style={tw`space-y-2`}>
            <Text style={[(tw`text-center font-bold text-gray-700`),{fontSize:wp(10)}]}>
                Friday
            </Text>
            <Text style={[(tw`text-center tracking-wider text-gray-600 font-semibold`),{fontSize:wp(4)}]}>
                Welcome to the future!
            </Text>
        </View>
        <View style={tw`flex-row justify-center`}>
            <Image source={require('../../assets/images/Designer.jpeg')} style={[({width:wp(75),height:hp(35)}),(tw`rounded-full`)]}/>
        </View>
        <TouchableOpacity onPress={()=>navigaton.navigate("Home")}style={[(tw`bg-teal-500  items-center mx-5 p-4 rounded-2xl`)]}>
            <Text style={[(tw`text-center text-white font-bold`),{fontSize:wp(5)}]}>
                Get Started
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WelcomeScreen