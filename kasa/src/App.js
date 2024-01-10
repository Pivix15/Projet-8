import '@/scss/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Home, APropos, Logements } from '@/pages'
import Error from '@/_utils/Error'


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
