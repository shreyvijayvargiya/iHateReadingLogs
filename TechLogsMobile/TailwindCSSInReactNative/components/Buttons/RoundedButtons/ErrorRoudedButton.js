import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';

const ErrorRoundedButton = () => {
    return (
        <TouchableOpacity style={tailwind('bg-red-500 mt-2 rounded-full')}>
            <Text style={tailwind('text-white text-xl text-center p-3')}>Error Rounded Button</Text>
        </TouchableOpacity>
    );
};
export default ErrorRoundedButton;
