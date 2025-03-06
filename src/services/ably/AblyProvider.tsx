import * as Ably from 'ably';
import {AblyProvider} from 'ably/react';
import {ReactNode, useEffect} from 'react';
import Constants from '../../helpers/Constants.ts';
import {User} from '../../types/User.ts';

interface AblyClientProps {
  children: ReactNode;
  user: User | null;
  clientState: [
    Ably.Realtime | null,
    React.Dispatch<React.SetStateAction<Ably.Realtime | null>>,
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
      });

      setClient(newClient);
    } else {
      if (client) {
        client.close();
        setClient(null);
      }
    }

    return () => {
      // Clean up the second Ably client if it was created
      if (newClient) {
        newClient.close();
      }
    };
  }, [user]);

  // Return children without AblyProvider if not signed in or client not ready
  if (!user || !client) {
    return <>{children}</>;
  }

  return <AblyProvider client={client}>{children}</AblyProvider>;
};

export default AblyClient;
