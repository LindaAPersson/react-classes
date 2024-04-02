import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefullGreetiing from "./components/StatefulGretting";
import StatefullGreetiingWithcallback from "./components/StaefulGreetingWithCallback";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import RenderingLists from "./components/RenderingLists";

function App() {
  return (
    <div className="App">
      <RenderingLists/>
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="Nice to see you" name="Linda" age="30"/>
      <StatefullGreetiing greeting="Test" namn="Linda"/>
      <StatefullGreetiingWithcallback />
      <EventsClass/>
      <EventsFunctional/>
      <ConditionalRenderingClass/>
      <ConditionalRenderingFunctional connected={false}/>
      <NestingComponents/>
      <MethodsAsPropsParent/>
    </div>
  );
}

export default App;
