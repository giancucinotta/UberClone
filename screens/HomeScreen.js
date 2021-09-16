import React from 'react';
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();

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
                    <GooglePlacesAutocomplete 
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        placeholder='Where from?'
                        styles={{
                            container: {
                                flex: 0
                            },
                            textInput: {
                                fontSize: 18
                            }
                        }}
                        query= {{
                            key: APIKEY,
                            language: 'en'
                        }}
                        enablePoweredByContainer={false}
                        onPress={(data, details = null) => {
                            dispatch(setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            }));

                            dispatch(setDestination(null));
                        }}
                        fetchDetails={true}
                        returnKeyType={'search'}
                    />

                    <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
