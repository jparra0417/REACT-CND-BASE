import React, { useReducer } from 'react';
import './App.css';
// import HookParent from './components/HookParent';
// import HookMemo from './components/HookMemo';
import HookComponentC from './components/HookComponentC';
import HookComponentA from './components/HookComponentA';
import HookComponentB from './components/HookComponentB';
// import HookCounterReduce from './components/HookCounterReduce';
// import HookCounterComplexReduce from './components/HookCounterComplexReduce';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <HookMemo></HookMemo> */}
      {/* <HookParent></HookParent> */}
      {/* <HookCounterComplexReduce></HookCounterComplexReduce> */}
      {/* <HookCounterReduce></HookCounterReduce> */}
      <CountContext.Provider value={{ countState : count, countDispatch: dispatch}}>
        <table>
          <tbody>
            <tr>
              <td>
                <HookComponentA></HookComponentA>
              </td>
              <td>
                <HookComponentB></HookComponentB>
              </td>
              <td>
                <HookComponentC></HookComponentC>
              </td>
            </tr>
          </tbody>
        </table>
      </CountContext.Provider>
    </div>
  );
}
export default App;
