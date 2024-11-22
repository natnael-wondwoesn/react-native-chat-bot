import { View, Text , Image , ScrollView, Touchable} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import Features from '../components/features';

import { dummy } from '../constants';


const HomeScreen = () => {
    const [messages,setMessages]= useState(dummy);
  return (
    <View style={[tw`flex-1 bg-white`]}>
        <SafeAreaView style={[(tw`flex-1 flex mx-6 py-6`)]}>
            <View style={[(tw`flex-row justify-center`)]}>
                <Image source = {require('../../assets/images/smallxl.jpg')} style={[(tw`rounded-full`)]}/>

            </View>
            {/* Features*/}
            {
                messages.length>0? (
                    <View style={[(tw`my-2 flex-1`)]}>
                        <Text style={[(tw`text-gray-700 font-semibold`),{fontSize:wp(5)}]}>
                            Bot
                        </Text>
                        <View style={[(tw`bg-neutral-200 rounded-3xl p-4`),{height:hp(58)}]}>
                            <ScrollView bounces={false}
                            style={[(tw`py-4`)]}
                            showsVerticalScrollIndicator={false}>
                                {
                                    messages.map((message,index)=>{

                                        if (message.role === 'bot') {
                                            if (message.content.includes('https://')) {
                                                return (
                                                    <View>
                                                        <Image source={{uri:message.content}} resizeMode='contain' style={[(tw`rounded-3xl`),{height:hp(40),width:wp(70)}]}/>
                                                    </View>
                                                )
                                            }else{
                                                return (
                                                    <View key={index} style={[(tw`flex-row justify-start my-2`)]}>
                                                    <View style={[(tw`bg-teal-300 rounded-xl p-2 rounded-tl-none`),{width:wp(70)}]}> 
                                                    <Text>
                                                        {message.content}
                                                    </Text>
                                                    </View>
                                                </View>
                                                )
                                            }

                                        }else{
                                            
                                        
                                        return (
                                            <View key={index} style={[(tw`flex-row justify-end`)]}>
                                                <View style={[(tw`bg-white rounded-xl p-2 my-2 rounded-tr-none`),{width:wp(70)}]}> 
                                                <Text>
                                                    {message.content}
                                                </Text>
                                                </View>
                                            </View>

                                        )
                                    }
                                    })


                                }


                            </ScrollView>

                        </View>

                    </View>
                ):(
                    <Features/>
                )
            }
            {/* Buttons*/}
            <View style={[(tw`flex justify-center items-center`)]}>
                <TouchableOpacity onPress={()=>setMessages(dummy)} style={[(tw`bg-teal-500 p-4 rounded-2xl`),{width:wp(70)}]}>
                    <Image style={[(tw``)]}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </View>
  )
}

export default HomeScreen