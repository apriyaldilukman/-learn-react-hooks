import React, { useState, useMemo } from 'react';

const slowFunction = (num) => {
  console.log('call slowFunction');
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // const doubleNumber = slowFunction(number)
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  // const themeStyle = {
  //   //backgroundColor: dark ? 'black : "white",
  //   color: dark ? 'white' : "black"
  // }

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  });
  console.log('component rerendered');

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((preState) => !preState)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

export default UseMemoHook;
