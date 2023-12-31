/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import UsersContext from '../context/UsersContext';

export default ({ route, navigation }) => {
  const [user, setUser] = React.useState(route.params ? route.params : {});
  const { dispatch } = React.useContext(UsersContext)

  return (
    <View style={style.form}>
      <Text style={style.label}>Nome</Text>
      <TextInput
        onChangeText={name => setUser({ ...user, name })}
        placeholder="Informe o Nome"
        value={user.name}
        style={style.input}
        placeholderTextColor='#000'
      />

      <Text style={style.label}>E-mail</Text>
      <TextInput
        onChangeText={email => setUser({ ...user, email })}
        placeholder="Informe o E-mail"
        value={user.email}
        style={style.input}
        placeholderTextColor='#000'
      />

      <Text style={style.label}>URL do Avatar</Text>
      <TextInput
        onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
        placeholder="Informe a URl do Avatar"
        value={user.avatarUrl}
        style={style.input}
        placeholderTextColor='#000'
      />

      <Button
        title='Salvar'
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user
          })
          navigation.goBack()
        }}
      />
    </View>
  )
};

const style = StyleSheet.create({
  label: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600'
  },
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginBottom: 16,
    fontSize: 16,
    color: '#000'
  },
})
