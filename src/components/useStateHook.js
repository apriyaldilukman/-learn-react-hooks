import React from 'react';
import { useState } from 'react';

const useStateHook = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        <span></span>
      </button>
    </div>
  );
};

export default useStateHook;
