import React, { useState } from 'react';
import './main.css';
import reactLogo from './assets/react.svg';
import FarmLogo from './assets/logo.png';
import { Button } from 'shared-ui';
export function Main() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        Button from shared-ui: <Button />
      </div>
      <p className='read-the-docs'>
        Click on the Farm and React logos to learn more
      </p>
    </>
  );
}
