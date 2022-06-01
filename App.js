import { useState } from 'react'; 
import { StyleSheet, View, FlatList} from 'react-native';

import ListItem from './components/ListItem';
import ListItemInput from './components/ListItemInput';

export default function App() {
  const [list, setList] = useState([]);

  function addInputHandler(enteredListText) {
    setList(currentList => [...currentList, {text: enteredListText, key: Math.random().toString() },])
  }; 


  return (
    <View style={styles.appContainer}>
      <ListItemInput onAddItem={addInputHandler} />
      <View style={styles.listContainer}>
        <FlatList 
       data={list} 
       renderItem={(itemData) => {
         return <ListItem text={itemData.item.text}/>;
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
  listContainer: {
    flex: 6,
  },
});
