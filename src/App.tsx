
import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greeting';

const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name="Saif" age={25} />
      <Counter data={5} />
    </div>
  );
}

export default App;
