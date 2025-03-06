import React, {useState} from 'react';
import {View} from 'react-native';
import Navigation from './navigation/Navigation.tsx';
import * as Ably from 'ably';
import AblyProvider from './services/ably/AblyProvider.tsx';
import useUser from './hooks/useUser.tsx';

const Root = () => {
  const [client, setClient] = useState<Ably.Realtime | null>(null);

  const {user} = useUser();
  if (client) {
    client.connection.on(stateChange => {
      console.log(
        'User is signed ' +
          (user?.name ? 'in' : 'out') +
          ' and new connection state is ' +
          stateChange.current,
      );
    });
  }

  return (
    <View style={{flex: 1}}>
      <AblyProvider user={user} clientState={[client, setClient]}>
        <Navigation />
      </AblyProvider>
    </View>
  );
};

export default Root;
