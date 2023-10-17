import React, { useState } from 'react';
import dummyEvano from '../assets/images/dummyEvano.jpeg';

const UserMenu = () => {

    const [userState, setUserState] = useState(true)

    const hideUserProfile = ()=>{
        setUserState(prevState=>!prevState);
    }

  return (
    <div className='md:fixed'>
        <aside id="sidebar-multi-level-sidebar" 
                aria-label="Sidebar">
            <div className="md:px-3 py-2 md:py-4 md:h-[650px] overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <li>
                        <button type='button'
                                onClick={hideUserProfile}
                                className="flex items-center w-[90%] mx-2 md:w-[200px] h-auto p-2 text-base transition duration-75 rounded-lg group hover:text-gray-900 hover:bg-gray-100"
                                aria-controls="dropDownMenu" 
                                data-collapse-toggle="dropDownMenu">
                        <svg className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span className="ml-3">Dashboard</span>
                        </button>
                        <ul id="dropDownMenu" className="py-2 space-y-2">
                            <li>
                                <button type="button" 
                                    className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:text-gray-900 hover:bg-gray-100" 
                                    aria-controls="dropdown-1" 
                                    data-collapse-toggle="dropdown-1">
                                    <svg className="flex-shrink-0 w-7 h-7 text-gray-500 md:-translate-x-1 -mr-2 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Product</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <ul id="dropdown-1" className="hidden py-2 space-y-2">
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button type="button" 
                                        className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                                        aria-controls="dropdown-2" 
                                        data-collapse-toggle="dropdown-2">
                                    <svg className='flex-shrink-0 w-7 h-7 text-gray-500 md:-translate-x-1 -mr-2 transition duration-75' aria-hidden="true" stroke='#6b7280' strokeWidth='2px' fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Customers</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <ul id="dropdown-2" className="hidden py-2 space-y-2">
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button type="button" 
                                        className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                                        aria-controls="dropdown-3" 
                                        data-collapse-toggle="dropdown-3">
                                    <svg className="flex-shrink-0 w-7 h-7 text-gray-500 md:-translate-x-1 -mr-2 transition duration-75" aria-hidden="true" stroke='#6b7280' strokeWidth='2px' fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Income</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <ul id="dropdown-3" className="hidden py-2 space-y-2">
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button type="button" 
                                        className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                                        aria-controls="dropdown-4" 
                                        data-collapse-toggle="dropdown-4">
                                    <svg className="flex-shrink-0 w-7 h-7 text-gray-500 md:-translate-x-1 -mr-2 transition duration-75" aria-hidden="true" stroke='#6b7280' strokeWidth='2px' fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Promote</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <ul id="dropdown-4" className="hidden py-2 space-y-2">
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button type="button" 
                                        className="flex items-center w-full p-2 text-base transition duration-75 rounded-lg group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                                        aria-controls="dropdown-5" 
                                        data-collapse-toggle="dropdown-5">
                                    <svg className="flex-shrink-0 w-7 h-7 text-gray-500 md:-translate-x-1 -mr-2 transition duration-75" aria-hidden="true" stroke='#6b7280' strokeWidth='2px' fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Help</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <ul id="dropdown-5" className="hidden py-2 space-y-2">
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            {userState && 
            <div className='mx-4'>
                <button type="button" 
                        className="border bg-[#2f2492] hover:bg-[#5349ac] flex justify-end mb-2 md:mb-0 w-full p-2 text-base rounded" 
                        >
                    <img className='w-10 h-10 rounded-full' src={dummyEvano} alt='dummy User Evano'/>
                    <span className="flex-1 ml-3 flex-col text-left whitespace-nowrap">
                        <h1>Evano</h1>
                        <h1 className='-mt-2 text-[12px]'>Project Manager</h1>
                    </span>
                    <svg className="w-3 h-3 mt-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
            </div>
            }
        </aside>
    </div>
  )
}

export default UserMenu