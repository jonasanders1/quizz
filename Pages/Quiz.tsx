import { Text, TouchableOpacity, View, StyleSheet, Switch } from 'react-native'
import Option from '../Components/Option';
import { useEffect, useState } from 'react';
import { EasyQuestions } from '../Components/Questions';
import { questionSets } from '../Components/Questions';


const Quiz = ({ route }) => {
  const { difficulty } = route.params;

  const [questions, setQuestions] = useState(questionSets[difficulty]);
  const [index, setIndex] = useState(0);
  const questionCount = questions.length;
  const [answer, setAnswer] = useState("");
  const [correctAnswered, setCorrectAnswered] = useState(0);
  //const [gameOver, setGameOver] = useState(false);
  //var percentage: string;
  let customColor = ""

  switch(difficulty) {
    case 'easy':
      customColor = '#267365';
      break;
    case 'medium':
      customColor = '#F29F05'
      break
    case 'hard':
      customColor = '#F23030'
      break
  }



  useEffect(() => {
    if (questions[index]) {
      setAnswer(questions[index].correctAnswer);
    }
  }, [index]);

  const calculatePercentage = () => {
    const calculation = (correctAnswered / questionCount) * 100;
    return percentage = calculation.toFixed(1);
  };

  const handlePlayAgain = () => {
    setIndex(0)
  } 

  if (index > questionCount - 1){
    console.log("Game over")
  }
 

  if (questions[index]) {
    return (
      <View style={styles.container}>
        
        {/* Question */}
        <View style={styles.questionContainer}>
          <Text style={[styles.question, {color: customColor}]}>
            {questions[index]?.question || ""}
          </Text>
          <Text style={[styles.progression, {color: customColor}]}>
            {questions[index]?.id || 0} / {questionCount}
          </Text>
        </View>
        
        {/* Options container */}
        <View style={styles.optionContainer}>
          {questions[index]?.options.map((option, optionIndex) => (
            <Option
              customColor={customColor}
              key={questions[optionIndex]?.id || 0}
              index={index}
              optionIndex={optionIndex}
              setIndex={setIndex}
              option={option}
              answer={answer}
              questionCount={questionCount}
              setCorrectAnswered={setCorrectAnswered}
            />
          ))}
        </View>

      </View>
    );
  } 
  
  else {
    return (
      <View style={styles.resultContainer}>
        <View style={{flexDirection:"row", justifyContent:"center"}}>
          <Text style={styles.resultText}>You scored</Text>
          <Text style={[styles.resultText, {color:"red"}]}> {correctAnswered}</Text>
          <Text style={styles.resultText}> out of</Text>
          <Text style={[styles.resultText, {color:"green"}]}> {questionCount}</Text>
        </View>
        <View>
          <Text style={{textAlign:"center", fontSize:16, marginTop:20}}>{`Percentage ${calculatePercentage()} %`}</Text>
        </View>
        <TouchableOpacity onPress={handlePlayAgain}>
          <View style={styles.button}>
            <Text style={styles.btnText}>
              Play again?
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  } 
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    marginTop: 100,
  },
  questionContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  question: {
    color: '#006ace',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  progression: {
    color: '#006ace',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'right',
  },
  optionContainer: {
    marginTop: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },

  // RESULT
  resultContainer: {
    width: '90%',
    flex: 1,
    marginBottom: 50,
    alignItems:"center",
    justifyContent:"center",
    gap:25
  },
  resultText: {
    fontSize: 28,
    textAlign: "center"
  },
  button: {
    backgroundColor:'#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10 
  },
  btnText: {
    color:"#fff",
    fontSize: 18,
    fontWeight:"600"
  }

});
