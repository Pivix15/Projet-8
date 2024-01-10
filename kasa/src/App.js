import '@/scss/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import APropos from '@/pages/APropos';
import Layout from '@/pages/Layout';
import Error from '@/_utils/Error'
import Logements from '@/pages/Logements';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/propos' element={<APropos />}/>
            <Route path='/logements' element={<Logements />}/>
            <Route path='*' element={<Error />}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
