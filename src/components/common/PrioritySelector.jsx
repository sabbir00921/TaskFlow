import React, { useState } from 'react'
import { FaAngleDown, FaFlag } from 'react-icons/fa6'
import _ from '../../lib/lib'

const PrioritySelector = ({priority, setPriority}) => {
  const priorities = _.priorities;
  const [openPriority, setOpenPriority] = useState(false);
  return (
    <div className='relative min-w-40'>
      <div className="active flex justify-between items-center py-2 px-4 rounded-md bg-focusMain cursor-pointer my-5  " onClick={() => setOpenPriority(prev => !prev)}>
        <div className="flex gap-x-1 text-sm">
          <span className={`text-xl ${priority === 1 ? 'text-red-500' : priority === 2 ? 'text-orange-500' : priority === 3 ? 'text-green-700' : 'text-gray-600'}`} >
            <FaFlag />
          </span>
          <span>Priority {priority}</span>
        </div>
        <span>
          <FaAngleDown />
        </span>
      </div>
      {
        openPriority && (
          <div className="absolute left-0 top-12 rounded-md p-2 w-full bg-white z-10" style={{ boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.2)' }}>
            {
              priorities.map(priority => (
                <div key={priority.level} className="active flex justify-between items-center py-2 px-4 my-2 rounded-md  cursor-pointer hover:bg-[#e6e6e6]" onClick={() => {
                  setPriority(priority.level);
                  setOpenPriority(false);
                }}>
                  <div className="flex gap-x-2 text-sm">
                    <span className={`text-xl`} style={{ color: priority.color }}>
                      <FaFlag />
                    </span>
                    <span>Priority {priority.level}</span>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
    </div>

  )
}

export default PrioritySelector