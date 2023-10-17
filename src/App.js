import React from 'react';
import wavingHand from './assets/images/wavingHand.svg';
import SearchBar from './assets/util/SearchBar';
import PageBottom from './components/PageBottom';
import UserMenu from './components/UserMenu';
import PerformanceDetails from './components/PerformanceDetails';
import BarChart from './components/BarChart';
import CircleChart from './components/CircleChart';

const App = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[15%] md:float-left text-base md:text-lg bg-[#100b3c] text-white">  
        <UserMenu/>
      </div>
      <div className="flex flex-col mt-2 md:mt-0 w-full md:w-[85%] bg-gray-100">
        <div className="flex flex-row text-sm md:text-lg mx-4 md:mx-8 md:mt-2">
          {/* HEADER user hello and search bar */}
          <div className="flex flex-row font-bold items-center">
            <h1>Hello Shahrukh</h1>
            <img className='w-6 h-6' src={wavingHand} alt='waving hand'/>
          </div>
          <div className="ml-auto">   
            <SearchBar/>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:mx-4 items-center md:items-start w-auto md:h-1/5'>
          {/* 4 cards in a row */}
          <PerformanceDetails/>
        </div>
        <div className='flex flex-col md:flex-row justify-between mt-2 md:mt-0 mx-2 md:mx-6 gap-2 md:w-auto h-3/5'>
          {/* 2 cards: 1 bar graph, 1 circular progress chart */}
          <div className='md:w-3/4 bg-white border rounded-2xl shadow-[0_0_5px_0_rgb(0,0,0,0.25)]'>
            <BarChart/>
          </div>
          <div className='md:w-1/4 bg-white border rounded-2xl shadow-[0_0_5px_0_rgb(0,0,0,0.25)]'>
            <CircleChart/>
          </div>
        </div>
        <div className='flex flex-col mx-2 mt-2 justify-between md:mx-6 w-auto  md:h-[35%] bg-white border rounded-2xl shadow-[0_0_5px_0_rgb(0,0,0,0.25)]'>
          <PageBottom/>
        </div>
      </div>
    </div>
  );
}

export default App;
