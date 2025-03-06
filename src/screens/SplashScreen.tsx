import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import useNavigation from '../hooks/navigation.tsx';
import useUser from '../hooks/useUser.tsx';

const SplashScreen = () => {
  const navigation = useNavigation();
  const {user} = useUser();
  useEffect(() => {
    setTimeout(() => {
      if(user){
        navigation.navigate('HomeScreen');
      }else {
        navigation.navigate('Login');
      }
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#ffdacc'}}>
      <Text>Splash Screen</Text>
    </View>
  );
};
export default SplashScreen;
