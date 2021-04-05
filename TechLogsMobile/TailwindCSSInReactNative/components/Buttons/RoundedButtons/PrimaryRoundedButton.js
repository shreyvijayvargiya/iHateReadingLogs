import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';


const PrimaryRoundedButton = () => {
    return (
        <TouchableOpacity style={tailwind('bg-indigo-700 rounded-full')}>
            <Text style={tailwind('text-white text-xl text-center p-3')}>Primary Rounded Button</Text>
        </TouchableOpacity>
    );
};
export default PrimaryRoundedButton;
