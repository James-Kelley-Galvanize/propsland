import ComponentOne from "./components/ComponentOne"


import './App.css';

function App() {
  return (
    <div className="App">
      <ComponentOne menuItem={"Hamburger"} toppings={"lettuce"}/>
      <ComponentOne catName={"Hanzo"}/>
    </div>
  );
}

export default App;
