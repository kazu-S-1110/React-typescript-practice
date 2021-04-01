import React, { useState} from 'react'; //ReactHooksなどで型注釈をする場合には基本的に型推論を利用して書いていく。
import './App.css';
import Hello from "./components/Hello"

function App() {
  const [name, setName] = useState<string | null>("Peter");
  return (
    <div>
      <Hello message={`I am ${name}!`}></Hello>
    </div>
  );
}
//型注釈で困ったらhttps://github.com/typescript-cheatsheets/reactを見てみる。

export default App;
