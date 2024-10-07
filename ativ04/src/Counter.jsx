import React, { useEffect, useState } from 'react';
export function Counter() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);

  useEffect(() => {
    if (!state) {
      return;
    }
    const time = setTimeout(() => {
      setCount(count + 1)
    }, 1000);
    return () => clearTimeout(time);
  })

  return (
    <>
      <section id="Contador">
        <h1>Contador profissional</h1>
        <div className="card">
          <strong>{count}s</strong>
          <button onClick={() => setState(true)}>Start</button>
          <button onClick={() => setState(false)}>Stop</button>
          <button onClick={() => { setState(false); setCount(0); }}>Clear</button>
        </div>
        <p className="read-the-docs">
          O contador incrementa um a cada 1000ms.
        </p>
      </section>
    </>
  )

}

export default Counter;