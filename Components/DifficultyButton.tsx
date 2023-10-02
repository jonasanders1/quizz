import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type DifficultyButtonProps = {
    label: string,
    customColor: string,
    selectedDifficulty: string
    onSelectDifficulty: (difficulty: string) => void,
};

const DifficultyButton: React.FC<DifficultyButtonProps> = ({
    label,
    customColor,
    onSelectDifficulty,
    selectedDifficulty
}) => {

    const isSelected = label === selectedDifficulty;
    const [selected, setSelected] = useState(isSelected);

    const handleDifficultyPress = () => {
        onSelectDifficulty(label); 
    };
    
    useEffect(() => {
        setSelected(isSelected);
    }, [isSelected]);
    
    
    return (
        <TouchableOpacity onPress={handleDifficultyPress}>
            <View
                style={[
                    styles.button,
                    {
                        backgroundColor: customColor,
                        opacity: selected ? 1 : 0.5,
                    },
                ]}
            >
                <Text style={styles.buttonText}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: 18,
        fontWeight: '300',
    },
});

export default DifficultyButton;
