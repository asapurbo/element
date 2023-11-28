import About from "./component/layouts/About";
import Banner from "./component/layouts/Banner";
import Item from "./component/layouts/Item";
import Project from "./component/layouts/Project";
import Navbar from "./component/layouts/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Item/>
      <Project/>
      <About/>
    </>
  );
}

export default App;
