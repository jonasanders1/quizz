import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

type OptionProps = {
    key: number
    index: number 
    option: string
    answer: string
    questionCount: number
    setIndex: React.Dispatch<React.SetStateAction<number>>
    setCorrectAnswered: React.Dispatch<React.SetStateAction<number>>
    optionIndex: number
    customColor: string
}

const Option: React.FC<OptionProps> = ({
  index, 
  setIndex, 
  option, 
  answer, 
  setCorrectAnswered, 
  questionCount,
  optionIndex,
  customColor,
}) => {

  const [selected, setSelected] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)



  const handleOptionClick = () => {
    if (selected) {
      setSelected(false);
      return;
    }
    setSelected(true);
    
    if (option === answer) {
      setIsCorrect(true);
      setCorrectAnswered(prev => prev + 1);
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    console.log(index)
    if (selected) {
      const timeoutId = setTimeout(() => {
        setIndex(index + 1);
        setSelected(false);
      }, 1000);

      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [selected, index, setIndex, questionCount]);

  
  return (
    <TouchableOpacity onPress={handleOptionClick}>
      
      <View style={[styles.container, {backgroundColor: customColor}, (selected && isCorrect) && {backgroundColor:"green"}, (selected && !isCorrect) && {backgroundColor:"red"}]}>
          <View style={styles.indexContainer}>
              <Text style={[styles.index, {color: customColor}]}>{optionIndex + 1}</Text>
          </View>
          <Text style={styles.option}>{option}</Text>
      </View>
    </TouchableOpacity>
  ) 
}

const styles = StyleSheet.create({
    container:{
        height:40,
        paddingHorizontal:5,
        //backgroundColor: "#006ace",
        borderRadius: 20,
        overflow:"hidden",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
        
    },
    indexContainer: {
        position:"absolute",
        left:10,
        backgroundColor:"white",
        width:25,
        height:25,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 20,
    },
    index: {
        fontSize:20, 
        //color:"#006ace", 
    },
    option: {
        width:"100%",
        textAlign:"center",
        color:"white",
        fontSize:20
    }
})

export default Option
