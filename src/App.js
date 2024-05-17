
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies/Movies';
import WatchList from './components/WatchList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Navbar/>
        <Routes>
         <Route path="/" element={
            <Fragment>
              <Banner/>
              <Movies/>
            </Fragment>
          }
         ></Route>
         <Route path="/watchlist" element={
           <WatchList/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
