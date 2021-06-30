import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');
  const [person, setPerson] = useState({ name: 'Mark', age: 35 });
  const [people, setPeople] = useState([
    {name: 'shaun', key: '1'},
    {name: 'chiko', key: '2'},
    {name: 'pepi', key: '3'},
    {name: 'jojo', key: '4'},
  ]);

  const clickHandler = () => {
    setName('chun-li');
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text>My Name is {name}</Text>
        <Text>His name is {person.name} and his age is {person.age} </Text>
        <Text>Enter Name</Text>
        <TextInput
          style={styles.input}
          placeholder='eg John Doe'
          onChangeText={(val) => setName(val)} />


        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler} />
        </View>

      </View>

      <View style={styles.listContainer}>
        <ScrollView>
       {people.map((item)=> {
         return (
           <View key={item.key}>
             <Text style={styles.item}>{item.name}</Text>
           </View>
         )
       })}
       </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
marginTop: 24,
padding: 30,
backgroundColor: 'pink',
fontSize: 24
  }
});
