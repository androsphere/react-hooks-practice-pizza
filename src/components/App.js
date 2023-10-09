import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const[pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then(setPizzas);
  }, []);


  return (
    <>
      <Header />
      <PizzaForm pizza = {selectedPizza} />
      <PizzaList pizzas = {pizzas} onSelectPizza = {setSelectedPizza}/>
    </>
  );
}

export default App;
