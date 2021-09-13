import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100, height: 100, resizeMode: 'contain'
                    }}
                    source={{
                        uri: "http://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png"
                    }} />
                    <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})