import { vocab } from './vocabList';
import './App.css';

function App() {

  const randomNum = Math.floor(Math.random() * Math.floor(vocab.length));
  return (
    <div className="App">
        <h1>{vocab[randomNum].FIELD1}</h1>
        <h3>{vocab[randomNum].FIELD2}</h3>
    </div>
  );
}

export default App;
