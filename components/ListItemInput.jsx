import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const ListItemInput = (props) => {
    const [enteredListText, setEnteredListText] = useState('');
    
  function textInputHandler(enteredText) {
    setEnteredListText(enteredText);
  };

  function addItemHandler() {
      props.onAddItem(enteredListText)
      setEnteredListText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
      style={styles.textInput} 
      placeholder='Add a task'
      onChangeText={textInputHandler} 
      value={enteredListText}
      />
      <Button title='Add' 
      color='steelblue'  
      onPress={addItemHandler}
      />
    </View> 
  )
}

export default ListItemInput

const styles = StyleSheet.create({
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
})