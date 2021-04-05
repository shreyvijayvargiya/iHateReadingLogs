import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';


const PrimaryButton = () => {
    return (
        <TouchableOpacity style={tailwind('bg-indigo-700 rounded-sm')}>
            <Text style={tailwind('text-white text-center text-xl p-2')}>Primary Button</Text>
        </TouchableOpacity>
    );
};
export default PrimaryButton;
