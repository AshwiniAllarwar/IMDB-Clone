import React from 'react'
import Logo from"../Assets/MoviesLogo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex space-x-8 items-center pl-3 py-4'>
        <img src={Logo} className='w-[50px]'/>
        {/* <a href='/movies'>
            <h3 className='text-red-400'>Movies</h3>
        </a>
        <a href='/watchlist'>
            <h3 className='text-red-400'>WatchList</h3>
        </a> */}
        <Link to="/"><h3 className='text-blue-800'>Movies</h3></Link>
        <Link to="/watchlist"><h3 className='text-blue-800'>WatchList</h3></Link>
    </div>
  )
}

export default Navbar