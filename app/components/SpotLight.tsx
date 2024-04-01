import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

const SpotLight = () => {
  return (
    <div className='hidden sm:block'>
        <div className="container py-4 my-5 bg-gray-900">

            <h1 className="text-center text-4xl text-bold">Collection Spotlight</h1>
            <p className="text-center text-sm p-5 mx-5" >
                Discover extraordinary moments with our Spotlight Collection 
                metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
            </p>

            <div className="flex flex-wrap justify-center">

                <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
                    <div className='text-2xl p-2 m-auto'>
                        <button className='text-blue-600 border-2 border-blue-600 p-2'>  <FaLessThan /> </button>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
                    <div className='bg-gray-700 p-2'>
                        <img src="/sport1.png" alt="Dishi" className="w-100 h-auto mb-2" />
                        <div className="border-b-2 border-dashed border-gray-400 w-full"></div>
                        <div className='text-center my-4'>
                            <h4>Las Vegas Aviators</h4>
                            <p className='text-sm'>Oct 15 | Sun | :30 PM</p>
                            <small>Las Vegas Ballpark, Las Vegas, Nevada</small>
                        </div>
                        <button className="bg-black hover:bg-black-700 py-2 px-5 rounded"> Take Flight Collection </button>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
                    <div className='bg-gray-700 p-2'>
                        <img src="/sport2.png" alt="Dishi" className="w-100 h-auto mb-2" />
                        <div className="border-b-2 border-dashed border-gray-400 w-full"></div>
                        <div className='text-center my-4'>
                            <h4>Sacramento River Cats</h4>
                            <p className='text-sm'>Oct 15 | Sun | :30 PM</p>
                            <small>Sutter Health Park, Sacramento, California</small>
                        </div>
                        <button className="bg-black hover:bg-black-700 py-2 px-5 rounded"> Take Flight Collection </button>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
                    <div className='bg-gray-700 p-2'>
                        <img src="/sport1.png" alt="Dishi" className="w-100 h-auto mb-2" />
                        <div className="border-b-2 border-dashed border-gray-400 w-full"></div>
                        <div className='text-center my-4'>
                            <h4>Las Vegas Aviators</h4>
                            <p className='text-sm'>Oct 15 | Sun | :30 PM</p>
                            <small>Las Vegas Ballpark, Las Vegas, Nevada</small>
                        </div>
                        <button className="bg-black hover:bg-black-700 py-2 px-5 rounded"> Take Flight Collection </button>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
                    <div className='text-2xl p-2 m-auto'>
                        <button className='text-blue-600 border-2 border-blue-600 p-2'>  <FaGreaterThan /> </button>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default SpotLight