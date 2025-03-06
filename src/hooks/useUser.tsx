import {useSelector} from './redux.ts';

const useUser = () => {
  const user = useSelector(selector => selector.user);

  return {user: user.data};
};
export default useUser;
