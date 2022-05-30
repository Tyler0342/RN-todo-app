import { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [enteredListText, setEnteredListText] = useState('');
  const [list, setList] = useState([]);

  function textInputHandler(enteredText) {
    setEnteredListText(enteredText);
  };

  function addInputHandler() {
    setList(currentList => [...currentList, enteredListText ])
  }; 


  return (
    <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} 
          placeholder='Add a task'
          onChangeText={textInputHandler} 
          />
          <Button title='Add' 
          color='steelblue'  
          onPress={addInputHandler}
          />
        </View> 
       <View style={styles.listContainer}>
         {list.map((item) => <Text key={list}>{list}</Text> )}
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'powderblue'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'powderblue',
    width: '80%',
    marginRight: 10,
    padding: 4
  },
  listContainer: {
    flex: 6
  }
});
