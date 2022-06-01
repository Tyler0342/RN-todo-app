import { StyleSheet, View, Text, Pressable } from 'react-native';

const ListItem = (props) => {

  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.listItem}>
            <Text style={styles.listText}>{props.text}</Text> 
        </View>
    </Pressable>
  )
}

export default ListItem

const styles = StyleSheet.create({
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