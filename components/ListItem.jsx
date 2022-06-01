import { StyleSheet, View, Text } from 'react-native';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
        <Text style={styles.listText}>{props.text}</Text> 
    </View>
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