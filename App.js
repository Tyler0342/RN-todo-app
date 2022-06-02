import { useState } from 'react'; 
import { StyleSheet, View, FlatList, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ListItem from './components/ListItem';
import ListItemInput from './components/ListItemInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [list, setList] = useState([]);

  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false)
  }

  function addInputHandler(enteredListText) {
    setList(currentList => [...currentList, {text: enteredListText, id: Math.random().toString() }])
    endAddItemHandler();
  }; 

  function deleteItemHandler(id) {
    setList(currentList => {
      return currentList.filter((item) => item.id !== id);
    });
  }

  return (
    <>
    <StatusBar style='dark' />
    <View style={styles.appContainer}>
      <Button 
      title='Add Item' 
      color='steelblue' 
      onPress={startAddItemHandler}
      />
      <ListItemInput visible={modalIsVisible} onAddItem={addInputHandler} onCancel={endAddItemHandler} />
      <View style={styles.listContainer}>
        <FlatList 
       data={list} 
       renderItem={(itemData) => {
         return ( 
         <ListItem 
         text={itemData.item.text} 
         id={itemData.item.id}
         onDeleteItem={deleteItemHandler} />
  )}} />
       </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  listContainer: {
    flex: 6,
  },
});
