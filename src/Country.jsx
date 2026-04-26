import React from 'react';
import { FaEarthAsia } from "react-icons/fa6";
import { TbBuildingBank } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineMap } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi";
const Country = ({country}) => {
   

    return (
        <div className="bg-white rounded-xl w-[300px] h-[280px]  shadow-2xl p-5">
        <div className="flex items-center justify-between gap-3 mb-3">
                <h1 className='text-2xl font-bold'>{country.name}</h1>
             <p className='flex justify-center bg-purple-300 text-purple-600 px-2 py-0.5 rounded-2xl items-center gap-0.5'><FaEarthAsia />{country.region}</p>
        </div>

        
           <div className='flex m-2 border border-gray-400 py-1 px-2 rounded-xl justify-between'>
             <p className='flex  items-center gap-1'> <samp><TbBuildingBank /></samp> Capital </p>
              <p className='font-semibold'>{country.capital}</p>

           </div>
           <div className='flex border m-2 border-gray-400 py-1 px-2 rounded-xl justify-between'>
             <p className='flex  items-center gap-1'> <samp><HiOutlineMap /></samp> Region  </p>
              <p className='font-semibold'>{country.region}</p>

           </div>
           <div className='flex border m-2 border-gray-400 py-1 px-2 rounded-xl justify-between'>
             <p className='flex  items-center gap-1'> <samp><FaPeopleGroup /></samp>Population </p>
              <p className='font-semibold'>{country.population}</p>

           </div>
           <div className='flex border m-2 border-gray-400 py-1 px-2 rounded-xl justify-between'>
             <p className='flex  items-center gap-1'> <samp><HiCurrencyDollar /></samp> Currency </p>
              <p className='font-semibold'>{country.currency}</p>

           </div>



          
        </div>
    );
};

export default Country;