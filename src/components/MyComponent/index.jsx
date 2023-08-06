import { useContext } from 'react';
import { contextEx } from '../contextEx';

function MyComponent() {
  const { text, setText } = useContext(contextEx);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello, world!')}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;