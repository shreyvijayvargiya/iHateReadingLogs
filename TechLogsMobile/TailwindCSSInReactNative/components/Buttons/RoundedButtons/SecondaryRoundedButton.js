import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';


const SecondaryRoundedButton = () => {
    return (
        <TouchableOpacity style={tailwind('bg-pink-300 mt-2 rounded-full')}>
            <Text style={tailwind('text-black text-xl text-center p-3')}>Secondary Rounded Button</Text>
        </TouchableOpacity>
    );
};
export default SecondaryRoundedButton;
