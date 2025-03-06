import Root from './src/Root';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
