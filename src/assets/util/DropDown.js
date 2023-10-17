import React from 'react'

const DropDown = (props) => {
    return (
        <>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-300 hover:text-white bg-white hover:bg-gray-800 font-normal rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                {props.title} 
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>

            {/* Dropdown menu */}
            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DropDown