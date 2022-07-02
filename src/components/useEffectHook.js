import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [isCount3Show, setIsCount3Show] = useState(false);

  useEffect(() => {
    console.log('Something Change');
  });

  useEffect(() => {
    count > 0 && setCount2((prev) => prev + 5);
  }, [count]);

  useEffect(() => {
    count2 >= 30 && setIsCount3Show(true);
  }, [count2]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        <span>+</span>
      </button>
      <br />

      <h1>{count2}</h1>
      <button onClick={() => setCount2((prevState) => prevState + 1)}>
        <span>+</span>
      </button>
      <br />

      {isCount3Show && (
        <>
          <h1>{count3}</h1>
          <button onClick={() => setCount3((prevState) => prevState + 1)}>
            <span>+</span>
          </button>
        </>
      )}
    </div>
  );
};

export default UseEffectHook;
