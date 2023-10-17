import React from 'react'

const PerformanceDetails = () => {
  return (
    <>
    <div className='flex flex-row text-base md:text-lg md:w-[50%]'>
        <div className='m-2 w-[50%] border rounded-2xl shadow-[0_0_5px_0_rgb(0,0,0,0.25)] flex flex-row'>
            <svg width='140' height='140' viewBox='0 0 250 250'>
                <circle cx='112' cy='105' r='65' strokeWidth='15px' fill='#6ee7b7' className='-translate-y-1'/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80" strokeWidth="1.5" stroke="#065f46" className="w-6 h-6">
                    <path className='translate-y-5 translate-x-6' strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </svg>
            <div className='flex flex-col justify-center md:-mt-4 -ml-6 md:-ml-4'>
                <h1>Earning</h1>
                <h1 className='font-bold md:text-xl'>$198k</h1>
                <div className='flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" className="translate-y-1 h-4 w-3" viewBox="0 0 20 20" fill="#059669">
                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <h1><span className='text-green-600'>37.8%</span> this month</h1>
                </div>
            </div>
        </div>
        <div className='m-2 w-[50%] border rounded-2xl shadow-[0_0_5px_0_rgb(0,0,0,0.25)] flex flex-row'>
            <svg width='140' height='140' viewBox='0 0 250 250'>
                <circle cx='112' cy='105' r='65' strokeWidth='15px' fill='#c4b5fd' className='translate-x-1'/>
                <svg className="w-6 h-6" stroke="#5b21b6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80">
                    <path className='translate-y-6 translate-x-7' strokeLinecap="round" strokeLinejoin="round" d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg>
            </svg>
            <div className='flex flex-col justify-center md:-mt-4 -ml-6 md:-ml-4'>
                <h1>Orders</h1>
                <h1 className='font-bold md:text-xl'>$2.4k</h1>
                <div className='flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" className=" translate-y-1 h-4 w-3" viewBox="0 0 20 20" fill="#dc2626">
                        <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                <h1><span className='text-red-600'>2%</span> this month</h1>
                </div>
            </div>
        </div>
    </div>
    <div className='flex flex-row text-base md:text-lg md:w-[50%]'>
        <div className='m-2 w-[50%] border rounded-2xl shadow-[0_0_5px_0_rgb(0,0,0,0.25)] flex flex-row'>
            <svg width='140' height='140' viewBox='0 0 250 250'>
                <circle cx='112' cy='105' r='65' strokeWidth='15px' className='-translate-y-1' fill='#93c5fd'/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80" stroke="#1e40af" className="w-6 h-6">
                    <path className='translate-y-5 translate-x-6' strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
            </svg>
            <div className='flex flex-col justify-center md:-mt-4 -ml-6 md:-ml-4'>
                <h1>Balance</h1>
                <h1 className='font-bold md:text-xl'>$2.4k</h1>
                <div className='flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" className=" translate-y-1 h-4 w-3" viewBox="0 0 20 20" fill="#dc2626">
                        <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                <h1><span className='text-red-600'>2%</span> this month</h1>
                </div>
            </div>
        </div>
        <div className='m-2 w-[50%] border rounded-2xl shadow-[0_0_5px_0_rgb(0,0,0,0.25)] flex flex-row'>
            <svg width='140' height='140' viewBox='0 0 250 250'>
                <circle cx='112' cy='105' r='65' strokeWidth='15px' fill='#f9a8d4'/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80" stroke="#9d174d">
                    <path className='translate-y-5 translate-x-6' strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </svg>
            <div className='flex flex-col justify-center md:-mt-4 -ml-6 md:-ml-4'>
                <h1>Total Sales</h1>
                <h1 className='font-bold md:text-xl'>$89k</h1>
                <div className='flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="translate-y-1 h-4 w-3" viewBox="0 0 20 20" fill="#059669">
                        <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                <h1><span className='text-green-600'>11%</span> this week</h1>
                </div>
            </div>
        </div>
    </div>    
    </>
  )
}

export default PerformanceDetails