import { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [enteredListText, setEnteredListText] = useState('');
  const [list, setList] = useState([]);

  function textInputHandler(enteredText) {
    setEnteredListText(enteredText);
  };

  function addInputHandler() {
    setList(currentList => [...currentList, {text: enteredListText, key: Math.random().toString() },])
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

       <FlatList 
       data={list} 
       renderItem={(itemData) => {
         return (
           <View style={styles.listItem}>
              <Text style={styles.listText}>{itemData.item.text}</Text> 
           </View>
         );
       }} />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'powderblue',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'powderblue',
    width: '80%',
    marginRight: 10,
    padding: 4,
  },
  listContainer: {
    flex: 6,
  },
  listItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'steelblue',
    color: 'white',
  },
  listText: {
    color: 'white',
  }
});
