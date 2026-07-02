import React from 'react'

const Propertyfilter = () => {
  return (
    <div className='h-[150px] w-[900px] border flex justify-around items-center rounded-xl border-gray-200 shadow-xl bg-white'>
    <div>
      <div>Location</div>
      <div>
        <input type="text" placeholder='Enter Location' />
      </div>
    </div>
    <div>
      <div>Property Type</div>
      <div>

      </div>
    </div>
    <div> 
      <div>Min Price</div>
      <div>
        <input className='text-gray-400' type="text" placeholder='Min Price' />
      </div>
    </div>
    <div> 
      <div>Max Price</div>
      <div>
        <input className='text-gray-400' type="text" placeholder='Max Price' />
      </div>
    </div>
    <div>
      <button className='"px-6 py-4 bg-green-600 rounded text-white font-mono'>Search</button>
    </div>

 

    </div>
  )
}

export default Propertyfilter;