import React from 'react'

const CircleChart = () => {
    const dashArray = 2 * Math.PI * 80;
    const dashOffSetPink = dashArray - (dashArray * 20) / 100; 
    const dashOffSetPurple = dashArray - (dashArray * 65) / 100; 
  return (
    <div className='flex mx-4 mt-4 md:mt-2 flex-col'>
        <div>
            <h1 className='font-bold text-lg md:text-2xl'>Customers</h1>
            <h1 className='text-gray-500 text-[10px] md:text-sm'>Customers that buy products</h1>
        </div>
        <svg 
            viewBox='0 0 200 200'
            className='md:-translate-x-2 md:translate-y-2 font-normal text-[10px]'
            >
            <circle cx='100' cy='100' r='80' strokeWidth='15px' className='stroke-gray-200' fill='none'/>
            <circle cx='100' cy='100' r='80' fill='none'
                strokeWidth='30px' 
                className='stroke-purple-600' 
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffSetPurple}
                strokeLinejoin='round'
                transform='rotate(-90 100 100)'
                />    
            <circle cx='100' cy='100' r='80' fill='none'
                strokeWidth='38px' 
                className='stroke-pink-600' 
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffSetPink}
                strokeLinejoin='round'
                transform='rotate(-90 100 100)'
                />
            <text className='font-bold text-2xl' 
                x="50%" y="50%" 
                dy="-0.6em" 
                textAnchor='middle'>
                65%
            </text>
            <text x="50%" y="50%" 
                dy="0.3em" 
                textAnchor='middle'>
                Total New
            </text>
            <text x="50%" y="50%" 
                dy="1.4em" 
                textAnchor='middle'>
                Customers
            </text>
        </svg>
    </div>
  )
}

export default CircleChart