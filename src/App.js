import Navigation from "./components/navigation/navigation"
import Welcome from "./components/navigation/welcome";
import "./index.css"

function App() {
  return (
    <div>
      <Navigation />
      <Welcome />
      <div className="spacer layer1" />
    </div>
  );
}

export default App;
