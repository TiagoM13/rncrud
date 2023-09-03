/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

import users from '../data/users';

export default props => {

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
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
};
