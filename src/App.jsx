import Hello from "./assets/Hello";
import Contact from "./assets/Contact";
import Counter from "./assets/Counter";
function App() {
 const helloData = [
  { name: 'Jone', messang: 'Hi there'},
  { name: 'Tom', messang: 'Hello..'},
 ];
 return (
  <div className="App">
    <Counter/>
    {helloData.map((data, index) => (
      <Hello key={index} name={data.name} messang={data.messang} />
    ))}

    <Contact email = "Jone@gmail.com" phone = "087320731"/>
  </div>
 );
}

export default App
