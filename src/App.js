import Navigation from "./components/navigation/navigation"
import Welcome from "./components/welcome";
import About from "./components/about";
import SideInfo from "./components/sideInfo";
import "./index.css"

function App() {
  return (
    <div>
      <Navigation />
      <SideInfo />
      <Welcome />
      <div className="spacer layer1" />
      <About />
    </div>
  );
}

export default App;
