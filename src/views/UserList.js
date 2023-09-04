/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View, Alert } from 'react-native';
import { Avatar, Button, ListItem, Icon } from 'react-native-elements';

import UsersContext from '../context/UsersContext';

export default props => {

  const { state, dispatch } = React.useContext(UsersContext)

  function confirmuserDeletion(user) {
    Alert.alert('Excluir usuário', 'Deseja excluir o usuário', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user
          })
        }
      }, {
        text: 'Não'
      }
    ])
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type='clear'
          icon={<Icon name='edit' size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmuserDeletion(user)}
          type='clear'
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    )
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem bottomDivider>
        <Avatar
          size={40}
          rounded
          source={{ uri: user.avatarUrl }}
        />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  )
};
