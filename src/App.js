import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='titleContainer'>
      <h1 
        className='title neon' >
          TV Shows List
      </h1>
      </div>
      <Outlet/>
    </div>
  );
}

export default App;