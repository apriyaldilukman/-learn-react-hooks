import React from 'react';
import useFetchData from '../hooks/useFetchData';

const UseCustomHook = () => {
  const { data } = useFetchData('https://jsonplaceholder.typicode.com/users');

  return (
    <div>
      {data &&
        data.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default UseCustomHook;
