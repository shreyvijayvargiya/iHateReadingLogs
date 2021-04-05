import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';


const SecondaryButton = () => {
    return (
        <TouchableOpacity style={tailwind('bg-pink-300 mt-2 rounded-sm')}>
            <Text style={tailwind('text-black text-center text-xl p-2')}>Secondary Button</Text>
        </TouchableOpacity>
    );
};
export default SecondaryButton;
