import './App.css';
import Nav from './Components/Nav/Nav';
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <div className="container">
            <Routes>
              <Route path="/">
                <Route index element={<HeroesFeatured />} />
                <Route path="hero/:id" />
                <Route path="*" element={<p>404</p>} />
              </Route>
            </Routes>
          </div>
        </main>
        <footer>
          <div className="container">
            <p>This content is kindly provided by <a href="https://superheroapi.com/">Superhero API</a></p>
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
