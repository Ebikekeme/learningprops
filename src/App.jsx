import Card from "./components/card";
import headphones from"./assets/headphones.jpeg";
import coffee from "./assets/coffee.jpeg";
function App(){
  return(
    <>
  <Card name="headphones" img={headphones}/>
  <Card name="coffee" img={coffee}/>
  </>
  );
}
export default App;