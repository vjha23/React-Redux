
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store'
import { Provider } from 'react-redux';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import CakeWithPayload from './components/CakeWithPayload';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IceCreamContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <CakeWithPayload />
      </div>
    </Provider>
  );
}

export default App;
