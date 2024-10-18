import "./App.css";
import Heading from "./components/heading";
import Middle from "./components/middle";
import Time from "./components/time";

function App() {
  return (
    <div className="Body">
      <div className="container">
        <Heading></Heading>
        <Middle></Middle>
        <Time></Time>
      </div>
    </div>
  );
}
export default App;
