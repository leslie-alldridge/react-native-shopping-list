import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {uuid} from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';

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
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
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
