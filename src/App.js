/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UsersProvider } from './context/UsersContext';

import UserList from './views/UserList';
import UserForm from './views/UserForm';

const Stack = createNativeStackNavigator();

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
          <Stack.Screen name="UserList" component={UserList} options={({ navigation }) => {
            return {
              title: 'Lista de Usuários',
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("UserForm")}
                  type="clear"
                  icon={<Icon name="add" size={25} color="white" />}
                />
              ),
            };
          }} />
          <Stack.Screen name="UserForm" component={UserForm} options={{ title: 'Formulário de Usuários' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
