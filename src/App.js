import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container.js';
import GamePage from './components/GamePage.js';
import axios from 'axios';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const fetchedGames = await axios.get('http://localhost:8080/get');
        setGames(fetchedGames.data);
      } catch (error) {
        console.log('Error in fetchedGames', error);
      }
    })();
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Container games={games} />} />
          <Route path='/game/:id' element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
