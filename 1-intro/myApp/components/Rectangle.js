
import React from 'react';
import { View } from 'react-native';

const Rectangle = () => {
    return (
        <View
            style={{
                width: 200,
                height: 100,
                backgroundColor: 'lightblue',
                borderRadius: 20,
                borderWidth: 5,
                borderColor: 'darkblue',
            }}
        />
    );
};

export default Rectangle;  