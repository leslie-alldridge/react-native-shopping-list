import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {uuid} from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'Milk',
    },
    {
      id: uuid(),
      text: 'Eggs',
    },
    {
      id: uuid(),
      text: 'Bread',
    },
    {
      id: uuid(),
      text: 'Juice',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    console.log(text);
    if (!text) {
      Alert.alert(
        //title
        'No item entered',
        //body
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
