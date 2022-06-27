import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container.js';
import GamePage from './components/GamePage.js';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Container />} />
          <Route path='/game/:id' element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
