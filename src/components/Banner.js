import React from 'react'

const Banner = () => {
  return (
    <div className='h-[45vh] md:h-[60vh] bg-center bg-no-repeat flex items-end'
        style={{
            backgroundImage:"url(https://m.media-amazon.com/images/S/pv-target-images/7cd6ae94186f8814bcd684b8cd4a05c25327e8b8ccae38b560275f0cdab02843._SX1080_FMjpg_.jpg)"
    }}>
        <div className='text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 w-full text-center text-white'>Kung Fu Panda 4</div>
    </div>
  )
}

export default Banner