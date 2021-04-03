import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons'; 
import * as Location  from 'expo-location'

const MapComponent = () => {
    const [location, setLocation] = React.useState(null)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        (async () =>{
            let { status } = await Location.requestPermissionsAsync();
            if(status !== 'granted'){
                setError('Permission to access location was denied');
                return;
            }
            const locate = await Location.getCurrentPositionAsync({});
            setLocation(locate.coords)
        })()
    }, []);

    return (
        <View>
            <Text style={styles.heading}>Map</Text>
            <MapView style={styles.map}>
                {location ? (
                    <Marker coordinate={location} title="My location" >
                        <FontAwesome name="map-marker" size={40} color="#B12A5B" />
                    </Marker>
                ):
                    <Text>{error}</Text>
                }
            </MapView>
        </View>
    );
};
export default MapComponent;

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.90,
    },
    heading: {
        alignSelf: 'center',
        paddingTop: 20,
        marginBottom: 10,
        fontSize: 24
    },
});