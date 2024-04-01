import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps"

function App() {
  return (
    <div className="App">
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="Nice to see you" name="Linda" age="30"/>
    </div>
  );
}

export default App;
