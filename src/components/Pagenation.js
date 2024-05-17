import React from 'react'

const Pagenation = ({Onprev,Onnext,CurrPage}) => {
  return (
    <div className='flex justify-center items-center gap-4'>
        <button 
        onClick={Onprev}
        className='border-4 border-blue-800 m-4 p-2 rounded-lg'>Previous</button>
        <div>{CurrPage}</div>
        <button 
        onClick={Onnext} 
        className='border-4 border-blue-800 m-4 p-2 rounded-lg'>Next</button>
    </div>
  )
}

export default Pagenation