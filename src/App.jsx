import Banner from "./components/Banner"
import Case from "./components/Case"
import Footer from "./components/Footer"
import Make from "./components/Make"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Service from "./components/Service"
import Slide from "./components/Slide"
import Team from "./components/Team"
import Work from "./components/Work"
import ScrollToTop from "react-scroll-to-top";

function App() {


  return (
    <>
    <ScrollToTop smooth color="#6f00ff"/>
    <Navbar/>
    <Banner/>
    <Project/>
    <Service/>
    <Make/>
    <Case/>
    <Work/>
    <Team/>
    <Slide/>
    <Footer/>
    </>
  )
}

export default App
