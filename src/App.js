import './App.css';
import Calculater from'./components/Calculater';
import { useState } from 'react';

function App() {


  const[active,setActive] = useState('');

  const handleTrun = (e) =>{
    console.log(e)
    setActive (!active)
  }

  return (
    <div className="App">
        <div className="wrapper">
           {active && <Calculater/>}
          <div className="button" onClick={handleTrun}>計算機</div>
          </div>

    </div>
  );
}

export default App;
