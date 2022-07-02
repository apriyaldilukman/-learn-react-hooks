import React, { useCallback, useState, memo } from 'react';

const UseCallbackHook = () => {
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  const onClickButton = () => setDark((prevState) => !prevState);
  const memoizedOnClickButton = useCallback(() => {
    setDark((prevState) => !prevState);
  }, []);

  console.log('parent component rerendered');
  return (
    <div style={theme}>
      <h3>Parent Component</h3>
      <button onClick={memoizedOnClickButton}>Toggle theme</button>
      <h3>Child Component</h3>
      <MemoizedChildComponent onClickSetDark={memoizedOnClickButton} />
    </div>
  );
};
const MemoizedChildComponent = memo(({ onClickSetDark }) => {
  const slowFunction = (num) => {
    console.log('call slowFunction');
    for (let i = 0; i < 100000000; i++) {}
  };

  console.log('child component rerendered');

  return (
    <div>
      <button onClick={onClickSetDark}>Toggle theme</button>
      <br />
      <p>{slowFunction(10)}</p>
    </div>
  );
});

export default UseCallbackHook;
