import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MoviesList from './components/MoviesList';
import Layout from './layout';
import Login from './pages/Login/index';


function App() {
  return (
    <>
      <BrowserRouter
      >
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/movie' element={<Layout><MoviesList/></Layout>}/>

         

        </Routes>
      </BrowserRouter>
      
      
      
    </>
  );
}

export default App;
