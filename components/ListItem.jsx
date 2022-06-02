import { StyleSheet, View, Text, Pressable } from 'react-native';

const ListItem = (props) => {

  return (
    <View style={styles.inputContainer}>
     <View style={styles.listItem}>
        <Pressable style={({ pressed }) => pressed && styles.pressedItem} android_ripple={{color: 'red'}} onPress={props.onDeleteItem.bind(this, props.id)}>
            <Text style={styles.listText}>{props.text}</Text> 
        </Pressable>
    </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor: 'powderblue',
        borderRadius: 6,
        margin: 8,
     },
    listItem: {
        margin: 6,
        borderRadius: 4,
        padding: 1,
        color: 'whitesmoke',
      },
      pressedItem: {
          opacity: 0,
      },
      listText: {
        color: 'black',
        padding: 8,
        borderRadius: 6,
      }
});