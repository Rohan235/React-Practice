import "./App.css";
import Card  from "./components/Card";

function App() {

 

  return (
    <>
      <h2 className="mb-5">Learning React Component</h2>
      <Card  userName = "Shobhita" btntxt="Click me" />
      <Card userName = "Radhika" btntxt=" Fuck me Hard"/>
    </>
  );
}

export default App;
