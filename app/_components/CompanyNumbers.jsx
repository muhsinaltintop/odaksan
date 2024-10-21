import React from 'react'
import NumbersCard from './_atoms/NumbersCard'

const CompanyNumbers = () => {
  return (
    <div className='pt-6'>
         <div className='text-center font-bold text-xl'>RAKAMLARLA ODAKSAN</div>
    <div className='grid grid-cols-2 mx-40 lg:flex lg:justify-around'>
      <div className='flex justify-center'><NumbersCard/></div>
      <div className='flex justify-center'><NumbersCard/></div>
      <div className='flex justify-center'><NumbersCard/></div>
      <div className='flex justify-center'><NumbersCard/></div>

    </div>
    </div>
  )
}

export default CompanyNumbers