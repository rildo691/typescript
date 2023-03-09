import './App.css';
import { Person, Country } from './components/Person'

function App() {
  return (
    <div className="App">
      <Person 
        name="Rildo Franco"
        email="rildowilliam2017@gmail.com"
        age={20}
        isMarried={false}
        friends={["8", "FCT Eng. Inf.", "PALACE", "SECRET"]}
        country={Country.Angola}
      />
    </div>
  );
}

export default App;
