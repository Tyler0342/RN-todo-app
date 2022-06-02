import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

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
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/OIP.jpg')} />
             <TextInput 
                style={styles.textInput} 
                laceholder='Add a task'
                onChangeText={textInputHandler} 
                value={enteredListText}
      />
    <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='Add' 
        color='steelblue'  
        onPress={addItemHandler} />
        </View>
        <View style={styles.button}>
        <Button title='Cancel' 
        color='indigo'
        onPress={props.onCancel}
        />
        </View>
            </View>
        </View> 
    </Modal>
  )
}

export default ListItemInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'powderblue'
      },
      textInput: {
        borderWidth: 1,
        borderColor: 'steelblue',
        backgroundColor: 'powderblue',
        color: 'black',
        width: '90%',
        marginRight: 4,
        padding: 6,
      },
      buttonContainer: {
          flexDirection: 'row',
          marginTop: 16,
      },
      button: {
          width: '40%',
          marginHorizontal: 1,
      },
      image: {
        width: 100,
        height: 100,
        margin: 40,
      }
})