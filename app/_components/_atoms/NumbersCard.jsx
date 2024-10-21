import React from 'react'
import { Machine } from './Icons'

const NumbersCard = () => {
  return (
    <div className='text-center m-10 drop-shadow-lg w-[150px]'>
       
        <div className='flex justify-center items-center border bg-white border-black rounded-xl p-5 shadow-2xl w-[150px]'>
            <div>
                <Machine />
            </div>
        </div>
        <div className='mt-2'>30+ Farklı Model</div>
    </div>
  )
}

export default NumbersCard
