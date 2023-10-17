import React from 'react';
import {script as barScript} from '../assets/scripts/barChart-script.js';

const BarChart = () => {
    return (
        <div>  
            <div className="w-auto px-2 pt-2 md:px-6 md:pt-2">
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col items-center">
                    <h5 className="leading-none text-lg md:text-2xl font-bold text-gray-900 dark:text-white pb-1">Overview</h5>
                    <p className="text-[10px] md:text-sm font-normal text-gray-500 dark:text-gray-400">Monthly Earning</p>
                </div>
                <div>
                    <select className='border-0 rounded-2xl text-sm md:text-base focus:ring-0' name="time" id="time">
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
            </div>
            <div id="column-chart" className='-mb-4'></div>
            </div>
            <script src={barScript}/>
        </div>
    )
}

export default BarChart