// RadioButton.jsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './RadioButton.css';

const RadioButton = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectOption = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20}}>
    <View style={{ flexDirection: 'row' }}>
      {options.map((option, index) => (
        // Inside the TouchableOpacity
        <TouchableOpacity
        key={option.value}
        onPress={() => handleSelectOption(option.value)}
        style={[
            styles.radioButtonContainer,
            { marginRight: 20 }, // Add marginRight to all buttons
            index === options.length - 1 && { marginRight: 0 }, // Remove marginRight for the last button
          ]}
        >
        <View style={styles.radioButtonContent}>
            <View
            style={{
                width: 100,
                height: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#000',
                backgroundColor: selectedOption === option.value ? 'red' : 'white',
                justifyContent: 'center', // Center the content vertically
                alignItems: 'center', // Center the content horizontally
            }}
            >
            <Text>{option.label}</Text>
            </View>
        </View>
        </TouchableOpacity>
      ))}
    </View>
    </View>
  );
};

export default RadioButton;
