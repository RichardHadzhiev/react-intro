import Header from "./components/Header.jsx"
import './App.css'
import Footer from "./components/Footer.jsx";
import Example from "./components/Examples.jsx";
import User from "./components/User.jsx";


function App() {

  return (
    <>
      <Header title= "React Intro" subtitle = "Components & Props" />
      <User userName = "Alice" />
      <User userName = "Bob" />
      <User userName = "Charly" />
      <hr/>
      <Example />
      <Footer />
    </>
  )
}

export default App;
