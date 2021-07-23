import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

const Welcome = () => {
    const [ active, setActive ] = useState({
        id: 0,
        src: stages[0].src
    });

    function moveAhead(){
        if(active.id === 2){
            setActive({ id: 0, src: stages[0].src })
        }
        if(active.id < 2){
            let nextId = active.id + 1; 
            const newItem = stages[nextId];
            setActive({ id: nextId, src: newItem.src });
        }
    };
    function moveBack(){
        if(active.id === 0 ){ setActive({ id: 2, src: stages[2].src })}
        if(active.id > 0){
            let nextId = active.id - 1; 
            setActive({ id: nextId, src: stages[nextId].src });
        }
    };

    const RenderIndicators = ({ id }) => {
        if(id === active.id){
            return <View style={styles.activeIndicator} />
        }else {
            return <View style={styles.indicator} />
        }
    };
    
    return (
        <View>
            <GestureRecognizer
                style={styles.imageContainer}
                onSwipeRight={moveBack}
                onSwipeLeft={moveAhead}
            >
                <Image source={active.src} />
            </GestureRecognizer>
            <Text style={{ fontSize: 24, alignSelf: "center", fontWeight: "600"}} allowFontScaling>Welcome Screen</Text>
            <View style={styles.indicatorContainer}>
                {stages.map(item => (
                    <RenderIndicators key={item.id} id={item.id} />
                ))}
            </View>
        </View>
    );
};
const stages = [
    {
        id: 0,
        src: require("../assets/healthy.jpeg")
    },
    {
        id: 1,
        src: require("../assets/vegetables.jpeg")
    },
    {
        id: 2,
        src: require("../assets/breakfast.jpeg")
    }
];
export default Welcome;


const styles = StyleSheet.create({
    activeIndicator: {
        width: 24,
        height: 12,
        borderRadius: 10,
        backgroundColor: "#F16943"
    },
    indicator: {
        width: 12,
        height: 12,
        marginHorizontal: 2,
        borderRadius: 10,
        backgroundColor: "rgba(241, 105, 67, 0.2)"
    },
    indicatorContainer: {
        display: "flex",
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height * 0.75,
    },
})