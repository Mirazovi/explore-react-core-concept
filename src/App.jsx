import './App.css'
import Counter from './Count';
import AddTeam from './Team';
import Friends from '../Friends';
function App() {
   function handleClick(sum){
    alert(sum + 5);
   }
  return (
    <>    
      <h1>React core concept</h1>
      <Friends></Friends>
      <AddTeam></AddTeam>
      <Counter></Counter>
      <counter></counter>
      <button onClick={() => handleClick(5)}>Click Me</button>
      <button onClick={() =>{alert('Fuck You Two')}}>Click Me 2</button>
    </>
  )
}

export default App
