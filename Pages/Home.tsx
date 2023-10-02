import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import useOwnNavigation from '../Hooks/UseOwnNavigation'
import DifficultyButton from '../Components/DifficultyButton'
import { useState } from 'react'

const Home = () => {

    const { navigate } = useOwnNavigation()
    const navigation = useNavigation()

    // Storing the selected difficulty
    const [difficulty, setDifficulty] = useState("easy")

    const handlePress = () => {
        navigation.navigate("Quiz", {difficulty})
        //navigate("Quiz", {difficulty})
    }

    const handleDifficultySelection = (selectedDifficulty: string) => {
        setDifficulty(selectedDifficulty)
    }

  return (
    <View style={styles.container}>

        <View style={styles.difficultyContainer}>
            <Text>Choose difficulty</Text> 
            
            <View style={styles.difficulties}>
                <DifficultyButton 
                    selectedDifficulty={difficulty}
                    onSelectDifficulty={handleDifficultySelection} 
                    customColor='#267365' 
                    label='easy' />
                <DifficultyButton 
                    selectedDifficulty={difficulty}
                    onSelectDifficulty={handleDifficultySelection} 
                    customColor='#F29F05' 
                    label='medium' />
                <DifficultyButton
                    selectedDifficulty={difficulty} 
                    onSelectDifficulty={handleDifficultySelection} 
                    customColor='#F23030' 
                    label='hard' />
            </View>
        </View>

        <TouchableOpacity onPress={handlePress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    Start Quizz
                </Text>
            </View>
        </TouchableOpacity>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({

    container: {
        marginTop: 30,
        flex:1, 
        justifyContent:"flex-start", 
        paddingHorizontal: 30,
        gap: 30
    },
    // Difficulty 
    difficultyContainer: {
        gap:10
    },
    difficulties: {
        flexDirection: "row",
        gap: 10
    },

    // Start Quiz Button
    button: {
        backgroundColor: "#4e5932",
        paddingHorizontal:10, 
        paddingVertical: 8,
        borderRadius: 8
    }, 
    buttonText: {
        color: "#fff", 
        fontSize:20,
        textAlign:"center"
    }, 
})