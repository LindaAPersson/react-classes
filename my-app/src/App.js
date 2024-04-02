import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefullGreetiing from "./components/StatefulGretting";
import StatefullGreetiingWithcallback from "./components/StaefulGreetingWithCallback";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="Nice to see you" name="Linda" age="30"/>
      <StatefullGreetiing greeting="Test" namn="Linda"/>
      <StatefullGreetiingWithcallback />
    </div>
  );
}

export default App;
