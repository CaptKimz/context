import React, { useState, useContext, createContext } from 'react';

const Context = createContext();

const ChildWithCount = () => {
  const { count, setCount } = useContext(Context);
  console.log('ChildWithCount re-renders');
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <p>Child</p>
    </div>
  );
};

const ExpensiveChild = () => {
  console.log('ExpensiveChild re-renders');
  return <p>Expensive child</p>;
};

const CountContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const contextValue = { count, setCount };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const App = () => {
  return (
    <CountContext>
      <ChildWithCount />
      <ExpensiveChild />
    </CountContext>
  );
};

export default App;
