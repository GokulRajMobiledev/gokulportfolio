import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Socialicons from './components/socialicons';
import "./App.css"

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" // Set the base path for the entire app
          element={<Layout />}
        >
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <div style={{ position: 'absolute', zIndex: 100 ,flex:1}}>
        <Socialicons style={{ position: 'sticky', top: 0, zIndex: 100 }} />
      </div>
    </BrowserRouter>
  );
}

export default App;
