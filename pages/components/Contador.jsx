import { Button } from '@radix-ui/themes';
import React, { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <Button onClick={() => setCount(count - 1)}>-</Button>
        {count}
        <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  );
}

export default Contador;