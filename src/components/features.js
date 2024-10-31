import { View, Text, Image, ScrollView} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';

export default function Features() {
  return (
    <ScrollView style={[(tw`p-4 my-2`)]}>
      <Text style={[({fontSize:wp(6.5)}),(tw`font-semibold text-gray-700`)]}>Features</Text>
      <View style={[(tw`bg-teal-200 p-4 rounded-xl my-1`)]}>
        <View style={[(tw`flex-row items-center space-x-1`)]}>
            <Image source={require('../../assets/images/chatgpt-icon.jpg')} style={[{height:hp(6),width:wp(13)},(tw`rounded-xl`)]}/>
            <Text style={[({fontSize:wp(5.8)}),(tw`font-semibold text-gray-700 px-2`)]}>ChatGPT</Text>

        </View>
        <Text style={[({fontSize:wp(3.5)}),(tw`font-medium text-gray-700 py-2`)]}>
            ChatGPT is a conversational AI that can generate human-like responses to text inputs.
        </Text>
      </View>

      <View style={[(tw`bg-black p-4 rounded-xl my-1`)]}>
        <View style={[(tw`flex-row items-center space-x-1`)]}>
            <Image source={require('../../assets/images/chatgpt-black-circular-logo-22058.png')} style={[{height:hp(6),width:wp(13)},(tw`rounded-xl bg-white`)]}/>
            <Text style={[({fontSize:wp(5.8)}),(tw`font-semibold px-2 text-white`)]}>DALL-E</Text>

        </View>
        <Text style={[({fontSize:wp(3.5)}),(tw`font-medium text-white py-2`)]}>
        DALL·E, DALL·E 2, and DALL·E 3 are text-to-image models developed by OpenAI using deep learning methodologies to generate digital images from natural language descriptions known as "prompts".
        </Text>
      </View>


      <View style={[(tw`bg-orange-200 p-4 rounded-xl my-1`)]}>
        <View style={[(tw`flex-row items-center space-x-1`)]}>
            <Image source={require('../../assets/images/claude-ai-icon.png')} style={[{height:hp(6),width:wp(13)},(tw`rounded-xl`)]}/>
            <Text style={[({fontSize:wp(5.8)}),(tw`font-semibold text-gray-700 px-2`)]}>Claude AI</Text>

        </View>
        <Text style={[({fontSize:wp(3.5)}),(tw`font-medium text-gray-700 py-2`)]}>
        Claude is a next generation AI assistant built by Anthropic and trained to be safe, accurate, and secure to help you do your best work.
        </Text>
                
      </View>

      <View style={[(tw`bg-purple-200 p-4 rounded-xl my-1`)]}>
        <View style={[(tw`flex-row items-center space-x-1`)]}>
            <Image source={require('../../assets/images/claude-ai-icon.png')} style={[{height:hp(6),width:wp(13)},(tw`rounded-xl`)]}/>
            <Text style={[({fontSize:wp(5.8)}),(tw`font-semibold text-gray-700 px-2`)]}>Claude AI</Text>

        </View>
        <Text style={[({fontSize:wp(3.5)}),(tw`font-medium text-gray-700 py-2`)]}>
        Claude is a next generation AI assistant built by Anthropic and trained to be safe, accurate, and secure to help you do your best work.
        </Text>
                
      </View>
    </ScrollView>
  )
}