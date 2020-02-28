import React from 'react';
import './App.css';
// import HookParent from './components/HookParent';
import HookMemo from './components/HookMemo';
// import HookComponentC from './components/HookComponentC';
// import HookComponentA from './components/HookComponentA';
// import HookComponentB from './components/HookComponentB';
// import HookCounterReduce from './components/HookCounterReduce';
// import HookCounterComplexReduce from './components/HookCounterComplexReduce';


function App() {
  return (
    <div className="App">
      <HookMemo></HookMemo>
      {/* <HookParent></HookParent> */}
      {/* <HookCounterComplexReduce></HookCounterComplexReduce> */}
      {/* <HookCounterReduce></HookCounterReduce> */}
      {/* <table>
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
      </table> */}
    </div>
  );
}
export default App;
