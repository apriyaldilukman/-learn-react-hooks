import './App.css';

import UseStateHook from './components/useStateHook';
import UseEffectHook from './components/useEffectHook';
import UseMemoHook from './components/useMemoHook';
import UseCallbackHook from './components/useCallbackHook';
import UseRefHook from './components/useRef';
import UseCustomHook from './components/useCustomHook';

function App() {
  return (
    <div className="App">
      {/* <UseStateHook />
      <UseEffectHook /> */}
      {/* <UseMemoHook/> */}
      <UseCallbackHook />
      {/* <UseRefHook/>
      <UseCustomHook/> */}
    </div>
  );
}

export default App;
