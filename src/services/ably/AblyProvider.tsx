import * as Ably from 'ably';
import {AblyProvider} from 'ably/react';
import {ReactNode, useEffect} from 'react';
import Constants from '../../helpers/Constants.ts';
import {User} from '../../types/User.ts';

interface AblyClientProps {
  children: ReactNode;
  user: User | null;
  clientState: [
    Ably.Realtime,
    React.Dispatch<React.SetStateAction<Ably.Realtime>>,
  ];
}

const AblyClient: React.FC<AblyClientProps> = ({
  children,
  user,
  clientState,
}) => {
  const [client, setClient] = clientState;
  useEffect(() => {
    let newClient: Ably.Realtime | null = null;

    if (user) {
      newClient = new Ably.Realtime({
        key: Constants.ablyKey,
        clientId: user.id,
        autoConnect: false,
      });

      setClient(newClient);
      console.log('RRRRRRRRRR here',);
      client.connection.connect();
    } else {
      if (client) {
        client.close();
      }else {
        console.log('RRRRRRRRR 1');
        newClient = new Ably.Realtime({
          key: Constants.ablyKey,
          autoConnect: false,
        });
        setClient(newClient);
      }
    }

    return () => {
      // Clean up the second Ably client if it was created
      if (newClient) {
        newClient.close();
      }
    };
  }, [user]);

  return <AblyProvider client={client}>{children}</AblyProvider>;
};

export default AblyClient;
