import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';

const ErrorButton = () => {
    return (
        <TouchableOpacity style={tailwind('bg-red-500 mt-2 rounded-sm')}>
            <Text style={tailwind('text-white text-center text-xl p-2')}>Error Button</Text>
        </TouchableOpacity>
    );
};
export default ErrorButton;
