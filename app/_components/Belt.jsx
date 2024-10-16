import React from 'react'
import BeltProductCard from './_atoms/BeltProductCard'

const Belt = () => {
  return (
    <div className='grid gap-4 grid-cols-2 w-full items-center py-2 sm:justify-around sm:flex sm:px-8 sm:h-32'>
        <div><BeltProductCard/></div>
        <div><BeltProductCard/></div>
        <div><BeltProductCard/></div>
        <div><BeltProductCard/></div>
    </div>
  )
}

export default Belt