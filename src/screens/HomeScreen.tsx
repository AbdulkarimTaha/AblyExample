import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from '../hooks/redux.ts';
import {removeUserAction} from '../redux/reducers/userReducer.ts';
import useNavigation from '../hooks/navigation.tsx';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button title={'logout'} onPress={() => {
        dispatch(removeUserAction())
        navigation.replace('Login')
      }} />
    </View>
  );
};

export default HomeScreen;
