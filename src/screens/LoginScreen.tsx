import React from 'react';
import {Button, View} from 'react-native';
import {setUserAction} from '../redux/reducers/userReducer.ts';
import {useDispatch} from '../hooks/redux.ts';
import useNavigation from '../hooks/navigation.tsx';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Login"
        onPress={() => {
          dispatch(setUserAction({id: Math.random().toString().slice(2, 7), name: 'kareem taha'}));
          navigation.replace('HomeScreen');
        }}
      />
    </View>
  );
};

export default LoginScreen;
