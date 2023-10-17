import React from 'react';
import dummyPic from '../assets/images/dummyImage.jpeg';

const PageBottom = () => {
return (
    
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:mx-2">
        <div className="flex items-center justify-between mx-4 mt-2">
            <div className='ml-2 font-bold'>
                <h1 className=' w-[230px]'>Product Sell</h1>
            </div>
            <div className="relative mr-2 md:-mr-[580px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <input type="text" id="table-search" className="flex w-[100px] md:w-auto p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search"/>
            </div>
            <div>
                <select className='w-[113px] md:w-auto border rounded border-gray-300 text-gray-400 focus:ring-blue-500' name="time" id="time">
                    <option value="Last Day">Last Day</option>
                    <option value="Last 7 Days">Last 7 Days</option>
                    <option value="Last Month">Last Month</option>
                    <option value="Last Year">Last Year</option>
                </select>
            </div>
        </div>
        <table className="w-full text-sm text-center">
            <thead className="text-xs border-b text-gray-500 uppercase">
                <tr>
                    <th scope="col" className="flex w-[230px] translate-y-2 md:translate-y-0 px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Stock
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Total Sales
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-200">
                    <td className="w-[100px] md:w-auto px-6 py-4 flex flex-row gap-2 text-left font-medium  whitespace-nowrap">
                        <img className='w-16 h-12 border rounded-xl' src={dummyPic} alt='dummy'/>
                        <div className='flex flex-col'>
                            <h1>Abstract 3D</h1>
                            <h2 className='text-gray-500'>Description of 1st Item</h2>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        32 in Stock
                    </td>
                    <td className="px-6 py-4">
                        $45.99
                    </td>
                    <td className="px-6 py-4">
                        20
                    </td>
                </tr>
                <tr className="hover:bg-gray-200">
                    <td className="w-[100px] md:w-auto px-6 py-4 text-left flex flex-row gap-2 font-medium whitespace-nowrap">
                        <img className='w-16 h-12 border rounded-xl' src={dummyPic} alt='dummy'/>
                        <div className='flex flex-col'>
                            <h1>Sarphens Illustration</h1>
                            <h2 className='text-gray-500'>Description of 2nd Item</h2>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        32 in Stock
                    </td>
                    <td className="px-6 py-4">
                        $45.99
                    </td>
                    <td className="px-6 py-4">
                        20
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)
}

export default PageBottom