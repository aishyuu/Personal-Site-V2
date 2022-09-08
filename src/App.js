import Navigation from "./components/navigation/navigation"
import Welcome from "./components/welcome";
import About from "./components/about";
import SideInfo from "./components/sideInfo";
import FeaturedProjects from "./components/featured_projects";
import "./index.css"
import ContactMe from "./components/contactMe";

function App() {
  return (
    <div>
      <Navigation />
      <SideInfo />
      <Welcome />
      <div className="spacer layer1" />
      <About />
      <div className="spacer layer2" />
      <FeaturedProjects />
      <div className="contact_me_home">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
